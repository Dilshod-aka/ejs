import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();
let KEY = process.env.KEY;

export default {
	sign: (payload) => jwt.sign(payload, KEY),
	verify: (token) => jwt.verify(token, KEY),
};
