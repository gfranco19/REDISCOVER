import React from 'react';
// fetching the data from the global redux store //
import { useSelector } from 'react-redux';
import Post from "./Post/Post";
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    console.log(posts);
    return(
            <>
                <h1 className={classes.heading} >Posts</h1>
                <Post />
                <Post />
            </>
    );
}

export default Posts;