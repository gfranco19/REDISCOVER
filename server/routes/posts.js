import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/posts.js'


const router = express.Router();

// adding routes

router.get('/', getPosts );
router.post('/', createPost );

// updating a post through controllers
router.patch('/:id', updatePost);



export default router;