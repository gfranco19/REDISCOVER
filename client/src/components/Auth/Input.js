import { green } from '@material-ui/core/colors';
import React from 'react';
import { TextField, Grid, InputAdornment, IconButton, Icon } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";


// custom input to avoid cluttering the Auth page with numerous textfields//
// line 23-29: is a show password comp for mobile devices to see what you typed if you need to if not it will not show anything // 


const Input = ({ name, handleChange, label, half, autoFocus, type, handleShowPassword }) => {
    return (
       <Grid item xs={12} sm={half ? 6 : 12}>
           <TextField 
                name={name}
                onChange={handleChange}
                variant="outlined"
                required
                fullWidth
                label={label}
                autoFocus={autoFocus}
                type={type}
                InputProps={name === 'password' && {
                    endAdornment: (
                        <InputAdornment position="end">
                            <IconButton onClick={handleShowPassword}>
                                {type === 'password' ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                        </InputAdornment>
                    )
                }}
           />
       </Grid>
    )
}

export default Input;