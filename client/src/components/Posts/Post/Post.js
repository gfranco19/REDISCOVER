import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux'
import { deletePost, likePost } from '../../../actions/posts';

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}
            style={{
                margin: "auto",
                boxShadow: "0 11px 40px -6px rgba(0,0,0,1.0)",  
            }}
        >
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay} >
                <Typography variant="h6" style={{ fontFamily: 'oswald' }}> {post.creator}</Typography>
                <Typography variant="body2"> {moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.overlay2} >
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="primary" component="h2">{post.tags.map((tag) => `#${tag}  `)}</Typography>
            </div>
            <Typography className={classes.title} color="textSecondary" gutterBottom variant="h5" >{post.title}</Typography>
            <CardContent style={{ padding: '4px'}}>
                <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'black' }} >{post.message}</Typography>
                <hr></hr></CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deletePost(post._id))} >
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;