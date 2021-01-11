import React, { useState } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import FileBase from 'react-file-base64';
// dispatch action from post.js //
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { createPost } from '../../actions/posts';



const Form = () => {
    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const classes = useStyles();
    // allows dispatch actions // 
    const dispatch = useDispatch();

    // when user hit submit it will send a post request with the data they added // 
    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(createPost(postData));

    }

    const clear = () => {

    }

    return(
        <Paper class={classes.paper}>
        <form autoComplete="off" no noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
        <Typography varient='h6'>Have a  place to share? Upload it below:</Typography>
        <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })}/>
        <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })}/>
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