import axios from 'axios';



// url leading to back end route // 
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);

// api request with cb function for entire post to specify url and data sent which is the entire new post //  
export const createPost = (newPost) => axios.post(url, newPost);

export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = (id) => axios.patch(`${url}/${id}/likePost`)

export const fetchHaunted = () => axios.get(`${url}/haunted`);

export const fetchHistorical = () => axios.get(`${url}/historical`);

export const fetchFilm = () => axios.get(`${url}/film`);

export const fetchNature = () => axios.get(`${url}/nature`);

export const fetchMisc = () => axios.get(`${url}/misc`);

export const fetchUser = (user) => axios.get(`${url}/${user}`);