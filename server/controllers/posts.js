// create handlers for all routes - extract logic from all the routes // 
import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
    try {
        // async action 
        const postMessages = await PostMessage.find();

        console.log(postMessages);
        // array of all messages 
        res.status(200).json(postMessages)
    } catch (error) {
        res.ststus(404).json({ message: error.message }); 
    }
}

// to create a post 
export const createPost = async (req, res) => {
    const post = req.body;
    
    const newPost = new PostMessage(post);

    try {
        // async
        await newPost.save();
        // if successful 201
        res.status(201).json(newPost)

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}