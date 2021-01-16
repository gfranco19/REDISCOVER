import mongoose from 'mongoose';

// give uniformity to the documents // 
const userSchema = mongoose.Schema({
    userName: String,
    email: String,
    password: String,
    createdAt: {
        type: Date,
        default: new Date()
    },
});

// convert schema into a model //
const userData = mongoose.model('userData', userSchema);


//exporting mongoose model from the post message file to find create delete and update. // 
export default userData;