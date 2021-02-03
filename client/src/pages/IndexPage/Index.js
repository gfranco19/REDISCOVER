import cityVideo from '../../components/welcomeVideo/welcome.mp4'
import "./Index.css";
import React, { useState } from "react";
import "./Index.css";
// import { Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import whitelogo from "../../assets/images/whitelogo.png"
import { Link } from "react-router-dom";
import { Toolbar, Typography, Button, Avatar } from "@material-ui/core";
import useStyles from "./styles";

const Index = (props) => {

    const history = useHistory();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    console.log(user);
    const logout = () => {
        dispatch({ type: 'LOGOUT' });   
        history.push("/")   
        setUser(null);
      };

    const classes = useStyles();
    // lines 27 - 33 will be seen when a user is logged in 35-37 will be shown when not logged in // 

    return (
      
        <div className="video">
            <video autoPlay muted loop
                style={{

                    position: 'absolute',
                    width: '100%',
                    left: '50%',
                    top: '50%',
                    height: '100%',
                    objectFit: 'cover',
                    transform: 'translate(-50%, -50%',
                    zIndex: '-1'
                }}>

                <source src={cityVideo} type='video/mp4' />
            </video>

            <br /><br /><br /><br />
            <div><img src={whitelogo} alt="logo" id="logo" className='center pulse' />
                <br /><br />
                <p class="description">Welcome to a community of urban explorers, <br />discovering the rich and historical world around us -  <br />right in our own backyards.</p></div>
            <br /><br /><br />
            <div className={classes.BrandContainer}>
                <Typography component={Link} className={classes.heading} variant="h2" align="center"></Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile} align='center' >
                        {/* <Avatar className={classes.grey} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar> */}
                        <Typography className={classes.userName} variant="h4" style={{ color: 'white', fontFamily: 'oswald'}}>{user.result.name}</Typography>
                        <Button variant="contained" className={classes.logout} style={{ padding: '15px', width: '150px'}} color="default" onClick={logout} >Logout</Button>
                        </div>
                ) : (
                        <Button component={Link} to="/auth" variant="contained" color="default" align="center" style={{ padding: '13px', fontFamily: 'fira mono', fontSize: '.85rem' }}>Welcome to Rediscover</Button>
                    )}
            </Toolbar>
        </div>            
    );
}

export default Index;