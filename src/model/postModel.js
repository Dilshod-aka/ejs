import { fetchAll } from '../utils/postgres.js';

let getAllPosts = async () => {
	try {
		let posts = await fetchAll(
			'SELECT * FROM posts WHERE deleted_at IS NULL',
		);
		return posts;
	} catch (error) {
		return console.log(error);
	}
};

let getPostById = async (postId) => {
	try {
		let targetPost = await fetchAll(
			'SELECT * FROM posts WHERE postId = $1',
			[postId],
		);
		return targetPost;
	} catch (error) {
		return error;
	}
};

let createNewPost = async (data) => {
	try {
		let newPost = await fetchAll(
			'INSERT INTO posts(title, description, content) VALUES ($1,$2,$3) RETURNING *',
			data,
		);
		return newPost;
	} catch (error) {
		return error;
	}
};

export default { getAllPosts, getPostById, createNewPost };
