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

//to find certain tags
export const getHaunted = async (req, res) => {
    try {
        // async action 
        const postMessages = await PostMessage.find({
            tags: "Haunted Place"
        });

        //console.log(postMessages);
        // array of all filtered
        return res.status(200).json( postMessages )
    } catch (error) {
        return res.status(404).json({ message: error.message }); 
    }
}

export const getFilm = async (req, res) => {
    try {
        // async action 
        const postMessages = await PostMessage.find({
            tags: "Film Location"
        });

        //console.log(postMessages);
        // array of all filtered
        return res.status(200).json( postMessages )
    } catch (error) {
        return res.status(404).json({ message: error.message }); 
    }
}

export const getHistorical = async (req, res) => {
    try {
        // async action 
        const postMessages = await PostMessage.find({
            tags: "Historical Site"
        });

        //console.log(postMessages);
        // array of all filtered
        return res.status(200).json( postMessages )
    } catch (error) {
        return res.status(404).json({ message: error.message }); 
    }
}

export const getNature = async (req, res) => {
    try {
        // async action 
        const postMessages = await PostMessage.find({
            tags: "Out in Nature"
        });

        //console.log(postMessages);
        // array of all filtered
        return res.status(200).json( postMessages )
    } catch (error) {
        return res.status(404).json({ message: error.message }); 
    }
}

export const getMisc = async (req, res) => {
    try {
        // async action 
        const postMessages = await PostMessage.find({
            tags: "Other Fun Place"
        });

        //console.log(postMessages);
        // array of all filtered
        return res.status(200).json( postMessages )
    } catch (error) {
        return res.status(404).json({ message: error.message }); 
    }
}



// update an existing post // 
export const updatePost = async (req, res) => {

    console.log(req.body.message)
    
    let { tags, likeCount, title, message, selectedFile, creator, post } = req.body

    let filter = { _id : req.body._id } 
    let update = { tags : tags, likeCount, likeCount, title : title, message : message, selectedFile : selectedFile, creator : creator, post : post } 

    // create a new object to spread and pass in the ID from the front end // 
    let updated = await PostMessage.findOneAndUpdate( filter, update, post) 
   // Trying to debug the update onclick...//
   console.log(creator, tags, likeCount, title, message )
   
    res.json([updated]);
}

    export const deletePost = async (req, res) => {
        const { id } = req.params

        if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Cannot find post with ID');

        await PostMessage.findByIdAndRemove(id);

        console.log('DELETE!')

        return res.json({ message: "Post Deleted "});
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send('Cannot find post with ID');

    // this will return us a post
    const post = await PostMessage.findById(id)
    //this will return the updated posts with the like count which is fetched above. to increase the count by 1//
    const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1  }, { new: true });

    console.log(likePost, post.likeCount);

    res.json(updatedPost);
}

//find post where the username is === to creator
export const getUser = async (req, res) => {
    const { user } = req.params.user;
    const { creator } = req.params.creator;

    const userName = await PostMessage.find({
        user: user
    });

    const Creator = await PostMessage.find({
        creator: creator
    });

    if(userName === Creator ) 

    console.log('Found User', + userName);

    return res.json({ message: "Found User"});
}

export default router;