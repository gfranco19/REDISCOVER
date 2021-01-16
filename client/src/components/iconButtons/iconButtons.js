import React from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';


const useStyles = makeStyles((theme) => ({
    button: {
        margin: theme.spacing(1),


    },
}));

export default function IconLabelButtons() {
    const classes = useStyles();
    const clear = () => {
    }


    return (
        <div >

            <Box textAlign='center' width="100%">
                <Button
                    variant="contained"
                    color="default"
                    style={{ maxWidth: '150px', maxHeight: '45px', minWidth: '150px', minHeight: '45px'}}
                    className={classes.button}
                    startIcon={<CloudUploadIcon />}>
                    Upload
                </Button>

                <Button
                    variant="contained"
                    color="secondary"
                    onClick={clear} 
                    style={{ maxWidth: '150px', maxHeight: '45px', minWidth: '150px', minHeight: '45px'}}
                    startIcon={<DeleteIcon />}>
                    Delete
                </Button>
            </Box>

        </div>
    );
}