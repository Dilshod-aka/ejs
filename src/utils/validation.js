import Joi from 'joi';

export let loginSchema = Joi.object({
	username: Joi.string().min(3).required(),
	password: Joi.string().min(8).required(),
	email: Joi.string().min(8).required(),
});

export let postSchema = Joi.object({
	title: Joi.string().required(),
	description: Joi.string().required(),
	content: Joi.string().required(),
});
