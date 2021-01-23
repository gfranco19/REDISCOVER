import express from 'express';

import { getPosts, createPost, updatePost, deletePost, likePost, getHaunted, getFilm, getHistorical, getNature, getMisc, getUser} from '../controllers/posts.js'


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
//getfiltered data
router.get('/haunted', getHaunted );
router.get('/film', getFilm );
router.get('/historical', getHistorical );
router.get('/nature', getNature );
router.get('/misc', getMisc );
router.get('/:user', getUser);



export default router;