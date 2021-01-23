import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HelpIcon from '@material-ui/icons/Help';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import LocalFloristIcon from '@material-ui/icons/LocalFlorist';
import ErrorIcon from '@material-ui/icons/Error';

import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import { Toolbar, Typography, Button, Avatar } from "@material-ui/core";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
    root: {
        justifyContent: "center",

      },
      scroller: {
        flexGrow: "0"
      }
    }));
    

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const history = useHistory();
  const [value, setValue] = React.useState(0);
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  const dispatch = useDispatch();



  const logout = () => {
    dispatch({ type: 'LOGOUT' });

    history.push("/");

    setUser(null);
  };

//   useEffect(() => {
//     const token = user?.token;

//     // JWT here

//     setUser(JSON.parse(localStorage.getItem('profile')));
// }, [])
    // console.log(user);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default"  elevation="0">
        <Tabs    
          value={value}
          classes={{ root: classes.root, scroller: classes.scroller }}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="default"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab component={Link} label="Home" to ="/account" icon={<HomeIcon />} {...a11yProps(0)} />
          <Tab component={Link} label="Explore" to="/explorer" icon={<ExploreIcon />} {...a11yProps(1)} />
          <Tab component={Link} label="Haunted"  to="/haunted" icon={<ErrorIcon />} {...a11yProps(2)} />
          <Tab component={Link} label="Historical" to="/historical" icon={<MenuBookIcon />} {...a11yProps(3)} />
          <Tab component={Link} label="Film" to="/film" icon={<GroupWorkIcon />} {...a11yProps(4)} />
          <Tab component={Link} label="Nature" to="/nature" icon={<LocalFloristIcon />} {...a11yProps(7)} />
          <Tab component={Link} label="Misc" to="/misc" icon={<HelpIcon />} {...a11yProps(5)} />
          <Toolbar className={classes.toolbar}>
                        {user ? (
                            <div className={classes.profile}>
                                <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                                <Typography className={classes.userName} variant="h6">{user.result.name}</Typography>
                                <Button variant="contained" className={classes.logout} color="secondary" onClick={logout} >Logout</Button>
                            </div>
                        ) : (
                            <Button component={Link} to="/auth" variant="contained" color="primary" align="center">Welcome to Rediscover</Button>
                        )}
                    </Toolbar>
        </Tabs>
      </AppBar>
    </div>
  );
}





