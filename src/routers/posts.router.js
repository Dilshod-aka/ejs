import { Router } from 'express';
import postController from '../controllers/post.controllers.js';
import { checkToken } from '../middlewares/checkToken.js';
import { auth } from './../middlewares/auth.js';
import { validate } from '../middlewares/validate.js';

let router = Router();

router.get('/', auth, postController.GET);
router.get('/posts', auth, postController.CREATE_PAGE);
router.get('/posts/:postId', auth, postController.GET_SINGLE);
router.post('/posts', checkToken, validate, postController.CREATE_POST);

export default router;
