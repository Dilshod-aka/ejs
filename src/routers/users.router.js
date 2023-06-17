import { Router } from 'express';
import userController from '../controllers/user.controller.js';
import passport from 'passport';
import { checkToken } from '../middlewares/checkToken.js';
import { validate } from '../middlewares/validate.js';

let router = Router();

//Login uchun username va password bir xil
router.get('/login', userController.LOGIN_PAGE);
router.post('/login', userController.LOGIN);
router.get('/register', userController.REGISTER_PAGE);
router.post('/register', userController.REGISTER);

router.get('/auth/github', passport.authenticate('github'));

router.get(
	'/auth/github/callback',
	passport.authenticate('github', {
		successRedirect: '/',
		failureRedirect: '/login',
	}),
);

export default router;
