import React, { useState, useEffect } from 'react';
import "./Form.css"
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import BackupIcon from '@material-ui/icons/Backup';
import ForwardButton from '@material-ui/icons/Forward';
import { TextField, Typography, Button } from '@material-ui/core';
import IconLabelButtons from '../iconButtons/iconButtons'
import FileBase from 'react-file-base64';
import { useDispatch, useSelector } from 'react-redux';
import Binoculars from '../../assets/images/binocularsblack copy.png'
import { createPost, updatePost } from '../../actions/posts';

const drawerWidth = 440;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "block"
    },
    hide: { display: 'none' },
    drawer: { width: drawerWidth, flexShrink: 0, },
    drawerPaper: { width: drawerWidth, padding: "20px", backgroundColor: "white", },
    drawerHeader: { display: 'flex', alignItems: 'center', padding: theme.spacing(0, 1), ...theme.mixins.toolbar, justifyContent: 'flex-start' },
    content: {
        flexGrow: 1, padding: theme.spacing(3),
        transition: theme.transitions.create('margin', { easing: theme.transitions.easing.sharp, duration: theme.transitions.duration.leavingScreen, }),
        marginRight: -drawerWidth,
    },
    contentShift: {
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: 0,
    },
}));

const PersistentDrawerRight = (currentId, setCurrentId) => {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const [postData, setPostData] = useState({ creator: '', title: '', message: '', tags: '', selectedFile: '' });
    const dispatch = useDispatch();
    const handleSubmit = (e) => {

        e.preventDefault();

        if (currentId) {
            dispatch(updatePost(currentId, postData));
        } else {
            dispatch(createPost(postData));
        }

    }

    const clear = () => {

    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            {/* <h5>Upload a photo here.</h5> */}
            <IconButton
                color="inherit"
                sizeLarge
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerOpen}
                className={clsx(open && classes.hide)}
            >
                <BackupIcon />
            </IconButton>

            <main
                className={clsx(classes.content, {
                    [classes.contentShift]: open,
                })}
            >
            </main>

            <Drawer
                className={classes.drawer}
                variant="persistent"
                anchor="right"
                open={open}
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <div className={classes.drawerHeader}>
                    <IconButton onClick={handleDrawerClose}>
                        <Typography>close</Typography>
                        {theme.direction === 'rtl' ? <ForwardButton /> : <ForwardButton />}
                    </IconButton>
                </div>
                <Divider />
                <br /><br />
                <form autoComplete="off" no noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                    <Typography varient='h6'>Upload your Place to Share!</Typography>
                    <br /><br />
                    <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
                    <br /><br />
                    <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />
                    <br /><br />
                    <TextField name="message" variant="outlined" label="Message" fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
                    <br /><br />
                    <TextField name="tags" variant="outlined" label="Tags" fullWidth value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
                    <br /><br />
                    <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
                        <br /><br />



                        {/* <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button> */}
                        {/* <Button variant="contained" color="secondary" size="" onClick={clear} fullWidth>Remove</Button> */}


                        <IconLabelButtons />
                        <br /><br />
                        <Divider />
                        <div><img src={Binoculars} alt="logo" id="logo" className="binocularsTwo" /></div>

                    </div>
                </form>


            </Drawer>
        </div>
    );
}

export default PersistentDrawerRight;
