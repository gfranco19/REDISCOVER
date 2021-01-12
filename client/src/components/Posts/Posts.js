import React from 'react';
import { Grid, CircularProgress } from '@material-ui/core'
// fetching the data from the global redux store //
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from "./Post/Post";
import useStyles from './styles';


const Posts = (post) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    // mobile devices comp for Grids // 
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <Post post={post} /> 
                    </Grid>
                    ))}
            </Grid>
        )
    );
}
// console.log(posts);
export default Posts;