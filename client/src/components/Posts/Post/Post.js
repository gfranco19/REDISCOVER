import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux'
import { deletePost } from '../../../actions/posts';
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const Post = ({ post, setCurrentId }) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}
            style={{
                // margin: "auto",
                boxShadow: "0 11px 40px -6px rgba(0,0,0,1.0)",
            }}
        >
            <Zoom >
                <CardMedia className={classes.media} image={post.selectedFile} title={post.title}
                    style={{
                        // margin: "auto",
                        width: "100%",
                        height: "100%",
                    }}
                />
            </Zoom>
            <div className={classes.overlay} >
                <Typography variant="body2" style={{ textShadow: '2px 2px 1px white', fontWeight: '600', color: 'black' }}> {moment(post.createdAt).fromNow()}</Typography>
            </div>

            <div className={classes.overlay2} >
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}>
                    <MoreHorizIcon fontSize='default' />
                </Button>
            </div>

            <div className={classes.details}>
                <Typography variant="body2" style={{ fontSize: '12px', marginLeft: '6px' }} color="primary" component="h2">{post.tags.map((tag) => `#${tag}  `)}</Typography>
                <Typography variant="h6" align='left' style={{ fontSize: '12px', marginRight: '6px' }}> {post.user}</Typography>
            </div>

            <Typography className={classes.title} color="textSecondary" style={{ fontSize: '16px', padding: '1px', margin: "2px" }} gutterBottom variant="h5" >{post.title}</Typography>

            <CardContent style={{ padding: '1px' }}>
                <Typography variant="body2" color="textSecondary" align='left' component="p" style={{ color: 'black', marginRight: '8px', marginLeft: '8px', fontSize: '14px' }} >{post.message}</Typography>
                <hr></hr>
            </CardContent>

            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" style={{ padding: '1px', margin: "2px" }} onClick={() => dispatch(deletePost(post._id))} >
                    <DeleteIcon fontSize="small" />
                    Delete
                </Button>
            </CardActions>
        </Card>
    );
}

export default Post;