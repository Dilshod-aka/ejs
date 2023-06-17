import jwt from './../utils/jwt.js';

let checkToken = (req, res, next) => {
	try {
		let { token } = req.cookies;
		console.log(token);
		if (!token) {
			throw new Error('Token is required');
		}
		next();
	} catch (error) {
		next(error);
	}
};

export { checkToken };
