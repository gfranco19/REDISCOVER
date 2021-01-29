import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import moment from 'moment';
import { useDispatch } from 'react-redux'
import { likePost } from '../../../actions/posts';


const PublicPost = ({ post }) => {
    const classes = useStyles();
    const dispatch = useDispatch();
    return (
        <Card className={classes.card}
            style={{
                margin: "auto",
                boxShadow: "0 16px 40px -6px rgba(0,0,0,1.0)",               
            }}
        >
            <CardMedia className={classes.media} image={post.selectedFile} title={post.title} />
            <div className={classes.overlay} >
                <Typography variant="h6" style={{ fontFamily: 'oswald' }}> {post.user}</Typography>
                <Typography variant="body2"> {moment(post.createdAt).fromNow()}</Typography>
            </div>

            <div className={classes.details}>
                <Typography variant="body2" color="primary" component="h2">{post.tags.map((tag) => `#${tag}  `)}</Typography>
            </div>
            <Typography className={classes.title} color="textSecondary" gutterBottom variant="h5" >{post.title}</Typography>
            <CardContent style={{ padding: '4px' }}>
                <Typography variant="body2" color="textSecondary" component="p" style={{ color: 'black', padding: '6px' }}>{post.message}</Typography>
                <hr></hr></CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(likePost(post._id))} >
                    <ThumbUpAltIcon fontSize="small" />
                    Like   {post.likeCount}

                </Button>
                <form action={'https://www.google.com/maps/dir/Current+Location/' + post.location} target="_blank">
                    <button style={{ padding: '7px', border: 'none', borderRadius: '7px', backgroundColor: '#3f50b5', color: 'white', marginRight: '4px', marginBottom: '4px' }} type="submit" >map it</button></form>
            </CardActions>
        </Card>
    );
}

export default PublicPost;