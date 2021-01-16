// create handlers for all routes - extract logic from all the routes // 
import mongoose from "mongoose";
import userData from "../models/User";

export const getUser = async (req, res) => {
    try {
        // async action 
        const UserData = await userData.find();

        console.log(UserData);
        // array of all messages 
        res.status(200).json(UserData)
    } catch (error) {
        res.ststus(404).json({ message: error.message }); 
    }
}

// to create a post 
export const createUser = async (req, res) => {
    const post = req.body;
    
    const newUser = new PostUser(post);

    try {
        // async
        await newUser.save();
        // if successful 201
        res.status(201).json(newUser)

    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

