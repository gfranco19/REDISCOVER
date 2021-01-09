import axios from 'axios';


// url leading to back end route // 
const url = 'http://localhost:5000/posts';

export const fetchPosts = () => axios.get(url);