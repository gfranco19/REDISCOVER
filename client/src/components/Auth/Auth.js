import React, { useState } from 'react';
import { Avatar, Button, Paper, Grid, Typography, Container, TextField, InputAdornment } from "@material-ui/core"
import useStyles from "./styles"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Input from './Input';



const Auth = () => {
    const classes = useStyles();
    const [showPassword, setShowPassword ] = useState(false);
    const isSignup = false;

    // this will handle showing the users password if requested by user. using a previouse state with a callback function. if it's on turn it off if its off turn it on // 
    const handleShowPassword = () => setShowPassword((prevShowPassword) => ! prevShowPassword)

    const handleSubmit = () => {

    };

    const handleChange = () => {

    };


    return (
       <Container component="main" maxwidth="xs">
           <Paper className={classes.paper} elevation={3}>
               <Avatar className={classes.avatar}>
                   <LockOutlinedIcon />
               </Avatar>
               <Typography variant ="h5">{isSignup ? "Sign up for Rediscover" : "Login to Rediscover"}</Typography>
               <form className={classes.form} onSubmit={handleSubmit}>
                   <Grid container spacing={2}>
                        {
                            isSignup && (
                                <>
                                    <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                                    <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                                </>
                            )}
                            <Input name="email" label=" Email Address" handleChange={handleChange} type="email" />
                            <Input name="password" label=" Password" handleChange={handleChange} type={showPassword ? 'text' : showPassword} handleShowPassword={handleShowPassword} />
                            { isSignup && <Input name="confirmPassword" label="Repeat Password" handleChange={handleChange} type="password" /> }
                   </Grid>
                            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                                { isSignup ? 'Sign up for Rediscover' : 'Login to Rediscover' }
                            </Button>
               </form>
           </Paper>
       </Container>
    )
}

export default Auth; 