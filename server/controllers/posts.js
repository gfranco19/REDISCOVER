// create handlers for all routes - extract logic from all the routes // 
import mongoose from "mongoose";
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



// update an existing post // 
export const updatePost = async (req, res) => {
    const { id: _id } = req.params;
    const post = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No Post with that ID!');

    const updatedPost = PostMessage.findByIdAndUpdate(_id, post, { new: true });
   
    res.json(updatedPost);
}
