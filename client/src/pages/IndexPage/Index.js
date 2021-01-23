import React from "react";
import "./Index.css";
// import { Button } from "react-bootstrap";
import whitelogo from "../../assets/images/whitelogo.png"
import { Link } from "react-router-dom";
import { Toolbar, Typography, Button, Avatar } from "@material-ui/core";
import useStyles from "./styles";

const Index = () => {

    const classes = useStyles();
    const user = null;
// lines 27 - 33 will be seen when a user is logged in 35-37 will be shown when not logged in // 
    return (
        <div>
            <div className="welcomeBackground">
                <br /><br /><br /><br /><br />
                <div><img src={whitelogo} alt="logo" id="logo" className='center pulse' />
                    <br /><br />
                        <p class="description">Welcome to a community of urban explorers, <br />discovering the rich and historical world around us -  <br />right in our own backyards.</p></div>
                    <br /><br /><br />
                    <div className={classes.BrandContainer}>
                    <div className="center">
                        <Typography component={Link} className={classes.heading} variant="h2" align="center"></Typography>
                    </div>
                    </div>
                    <Toolbar className={classes.toolbar}>
                        {user ? (
                            <div className={classes.profile}>
                                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                                <Button variant="contained" className={classes.logout} color="secondary">Logout</Button>
                            </div>
                        ) : (
                            <Button component={Link} to="/auth" variant="contained" color="primary" align="right">Login or Sign up</Button>
                        )}
                    </Toolbar>
                </div>
            </div>
    );
}

export default Index;