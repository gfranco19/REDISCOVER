import mongoose from 'mongoose';

// give uniformity to the documents // 
const postSchema = mongoose.Schema({
    
    title: String,
    message: String,
    creator: String,
    tags: [String],
    location: String,
    // FIND A WAY TO SHORTEN THE STRING //
    selectedFile: String, 

    likeCount: {
        type: Number,
        default: 0
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    user:{
        type: String,
        unique: true
    }
});

// convert schema into a model //
const PostMessage = mongoose.model('PostMessage', postSchema);



//exporting mongoose model from the post message file to find create delete and update. // 
export default PostMessage;