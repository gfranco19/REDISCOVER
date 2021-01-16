// create handlers for all routes - extract logic from all the routes // 
import express from 'express';
import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js"


const router = express.Router();

export const getPosts = async (req, res) => {
    try {
        // async action 
        const postMessages = await PostMessage.find()

        //console.log(postMessages);
        // array of all messages 
        return res.status(200).json( postMessages )
    } catch (error) {
        return res.status(404).json({ message: error.message }); 
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

    console.log(req.body.message)
    
    let { tags, likeCount, title, message, selectedFile, creator } = req.body

    let filter = { _id : req.body._id } 
    let update = { tags : tags, likeCount, likeCount, title : title, message : message, selectedFile : selectedFile, creator : creator } 

    let updated = await PostMessage.findOneAndUpdate( filter , update)
   
   console.log(creator, tags, likeCount, title, message )
   
    res.json([updated]);
}



export default router;