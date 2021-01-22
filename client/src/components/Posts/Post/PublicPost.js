import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import moment from 'moment';
import {useDispatch} from 'react-redux'
import { likePost } from '../../../actions/posts';




const PublicPost = ({post}) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return(
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay} >
                <Typography variant="h6"> {post.creator}</Typography>
                <Typography variant="body2"> {moment(post.createdAt).fromNow()}</Typography>
            </div>

            <div className={classes.details}>
                <Typography variant="body2" color="primary" component="h2">{post.tags.map((tag) => `#${tag}  `)}</Typography>
            </div>
            <Typography className={classes.title} color="textSecondary" gutterBottom variant="h5" >{post.title}</Typography>
            <CardContent>
            <Typography variant="body2" color="textSecondary" component="p" >{post.message}</Typography>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))} >
                    <ThumbUpAltIcon fontSize="small" />
                    Like   {post.likeCount} 
                   
                </Button>
                <form action={'https://www.google.com/maps/dir/Current+Location/' + post.location} target="_blank">
        <button type="submit" >Click me</button></form>
            </CardActions>
        </Card>
    );
}

export default PublicPost;