import { hashPassword } from '../utils/model.js';
import userModel from '../model/userModel.js';
import jwt from './../utils/jwt.js';

let LOGIN = async (req, res, next) => {
	try {
		let { email, password } = req.body;
		let user = await userModel.userLogin(email, password);
		let prop = user[0];
		let token = jwt.sign({ userid: prop.userid });
		res.cookie('token', token).redirect('/');
	} catch (error) {
		res.render('error');
	}
};

let REGISTER = async (req, res, next) => {
	try {
		let { username, email, password } = req.body;
		console.log(username, email, password);
		let user = await userModel.userPost([username, email, password]);
		console.log(user);
		for (let prop of user) {
			const token = jwt.sign({ userid: prop.userid });
			res.cookie('token', token).redirect('/');
		}
	} catch (error) {
		console.log(error);
		// res.render('error');
	}
};

let LOGIN_PAGE = (req, res, next) => {
	try {
		res.render('login');
	} catch (error) {
		next(error);
	}
};

let REGISTER_PAGE = (req, res, next) => {
	try {
		res.render('register');
	} catch (error) {
		next(error);
	}
};

export default { LOGIN, REGISTER, LOGIN_PAGE, REGISTER_PAGE };
