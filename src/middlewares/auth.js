const auth = (req, res, next) => {
	if (req.cookies.token) {
		next();
	} else {
		res.redirect('/login');
	}
};

export { auth };
