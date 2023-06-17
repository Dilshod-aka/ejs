import postModel from '../model/postModel.js';

// Get all posts with accepted status

let GET = async (req, res, next) => {
	try {
		let posts = await postModel.getAllPosts();

		if (!posts.length) {
			return res.render('error');
		}
		res.render('index', { posts });
	} catch (error) {
		res.render('error');
	}
};

let CREATE_PAGE = async (req, res, next) => {
	try {
		res.render('create');
	} catch (error) {
		next(error);
	}
};

let GET_SINGLE = async (req, res, next) => {
	try {
		let { postId } = req.params;
		let post = await postModel.getPostById(postId);

		if (!post.length) {
			return res.render('error');
		}

		res.render('single', { post });
	} catch (error) {
		res.render('error');
	}
};

// Create post
let CREATE_POST = async (req, res, next) => {
	try {
		let { title, description, content } = req.body;

		let body = [title, description, content];

		let newPost = await postModel.createNewPost(body);
		console.log(newPost);

		res.redirect('/');
	} catch (error) {
		res.render('error');
	}
};

export default { GET, GET_SINGLE, CREATE_POST, CREATE_PAGE };
