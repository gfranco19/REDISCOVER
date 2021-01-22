import React from 'react';
// fetching the data from the global redux store //
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import PublicPost from "./Post/PublicPost";
import useStyles from './styles';

const PublicPosts = ({ setCurrentId }) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

    // mobile devices comp for Grids // 
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={6}>
                        <PublicPost post={post} setCurrentId={setCurrentId}/> 
                    </Grid>
                    ))}
            </Grid>
        )
    );
}

export default PublicPosts;