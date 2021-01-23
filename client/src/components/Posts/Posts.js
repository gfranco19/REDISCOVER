import React from 'react';
// fetching the data from the global redux store //
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import Post from "./Post/Post";
import useStyles from './styles';

const Posts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    // mobile devices comp for Grids // 
    return (
        !posts.length ? <CircularProgress /> : (
            <div>
            <Grid className={classes.container} container alignItems="stretch" spacing={2}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12}sm={3} >
                        <Post post={post} setCurrentId={setCurrentId}/> 
                    </Grid>
                    ))}
            </Grid>
            </div>
        )
    );
}

export default Posts;