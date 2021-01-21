import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost } from '../controllers/posts.js'


const router = express.Router();

// global routes for UPDATE DELETE CREATE GET // 
router.get('/', getPosts );
router.post('/', createPost );
// updating a post through controllers // 
router.patch('/:id', updatePost);
// delets the posts through controllers // 
router.delete('/:id', deletePost);
// similar to the update post in liking the post so I used patch // 
router.patch('/:id/likePost', likePost);




export default router;