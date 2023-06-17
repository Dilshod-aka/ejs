import { fetchAll } from '../utils/postgres.js';

let userLogin = async (email, password) => {
	try {
		let user = fetchAll(
			'SELECT * FROM users WHERE email = $1 AND password = $2',
			[email, password],
		);
		return user;
	} catch (error) {
		return error;
	}
};

let userPost = async (data) => {
	try {
		let target = await fetchAll(
			'INSERT INTO users(username, email, password ) VALUES ($1, $2, $3) RETURNING *',
			data,
		);
		return target;
	} catch (error) {
		return error;
	}
};

let githubLogin = async (email) => {
	try {
		let user = fetchAll('SELECT * FROM users WHERE email = $1', [email]);
		return user;
	} catch (error) {
		return error;
	}
};

export default { userLogin, userPost, githubLogin };
