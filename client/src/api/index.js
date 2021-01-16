import axios from 'axios';


// url leading to back end route // 
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

// api request with cb function for entire post to specify url and data sent which is the entire new post //  
export const createPost = (newPost) => axios.post(url, newPost)
<<<<<<< HEAD
export const createUser = (newUser) => axios.post(url, newUser)
=======

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
>>>>>>> 059549bf69b302af55726f282d5cb42043aa1f44
