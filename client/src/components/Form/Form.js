import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper, MenuItem } from '@material-ui/core';
import FileBase from 'react-file-base64';
// dispatch action from post.js //

import { useDispatch, useSelector } from 'react-redux';

// import IconLabelButtons from '../iconButtons/iconButtons'

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', location: '', selectedFile: '', user: '' });

    // To find the posts will the same ID to be updated with currentID to find a specific post. //
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    // styling classes from the JS files.
    const classes = useStyles();
    // allows dispatch actions // 
    const dispatch = useDispatch();

    // populates the values of the form with a callback and a dependency array // 
    useEffect(() => {
        if (post) {
            console.log(post)
            setPostData(post);
        }
    }, [post])

    // when user hit submit it will send a post request with the data they added // 
    const handleSubmit = (e) => {

        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
            // regardless of if or else we will clear the form and call the clear function at the end //     
        }
        clear();
    }
    //this will grab the username and automatically render it in creator
    const [user] = useState(JSON.parse(localStorage.getItem('profile')));
    const email = user.result.email;
    // This function will clear form after submit is click upon editing a post // 
    const clear = () => {
        setCurrentId(null);
        setPostData({ creator: '', title: '', message: '', tags: '', location: '', selectedFile: '', user: '', });
    }

    return(
        <Paper className={classes.paper}>
        <form autoComplete="off" no noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography varient='h6'>Have a  place to share? Upload it below:</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>

                {/* <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value.split( ',' ) })}/> */}

        <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })}/>
        <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })}/>
        <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({base64}) => setPostData({...postData, selectedFile: base64})} />
        <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Upload</Button>
        <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Remove</Button>
        </div>
        </form>

        </Paper>
    );
}

export default Form;