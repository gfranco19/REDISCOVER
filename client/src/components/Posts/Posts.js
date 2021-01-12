import React from 'react';
// fetching the data from the global redux store //
import { useSelector } from 'react-redux';
import Post from "./Post/Post";
import useStyles from './styles';

const Posts = () => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();

<<<<<<< HEAD
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
=======
    console.log(posts);
    return(
            <>
                <h1 className={classes.heading} >Posts</h1>
                <Post />
                <Post />
            </>
>>>>>>> fd740b5e25249cf9e174509ddc5220091790d1ae
    );
}

export default Posts;