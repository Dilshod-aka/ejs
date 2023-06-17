import express from 'express';
import { sassTrigger } from './sass/sass.js';
import userRouter from './routers/users.router.js';
import postRouter from './routers/posts.router.js';
import passport from 'passport';
import GitHubStrategy from 'passport-github';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import userModel from './model/userModel.js';

let app = express();

app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
sassTrigger();
app.use(
	session({
		secret: 'github',
		resave: false,
		saveUninitialized: false,
		name: 'token',
		cookie: {
			httpOnly: true,
			secure: false,
			maxAge: 2 * 24 * 60 * 60 * 1000,
		},
	}),
);

app.use(passport.session());
app.use(passport.initialize());

passport.use(
	new GitHubStrategy(
		{
			clientID: '5a69a37d0a4b7fb7b854',
			clientSecret: '6935751c10b604c11ccf78b2f41410c3f8833c7b',
			callbackURL: 'http://localhost:4000/auth/github/callback',
			passReqToCallback: true,
			usernameField: 'email',
		},
		function (request, accessToken, refreshToken, profile, cb) {
			const emailExists = userModel.githubLogin(profile.email);
			cb(null, profile);
		},
	),
);

passport.serializeUser(function (user, cb) {
	cb(null, user);
});

passport.deserializeUser(function (user, cb) {
	cb(null, user);
});

app.use(userRouter);
app.use(postRouter);

app.listen(4000, () => console.log('Listening on PORT 4000'));
