import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { faHouseUser, faCompass, faGhost, faLandmark, faFilm, faTree, faTags } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import icon from '../Auth/icon';

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
  const [value, setValue] = React.useState(0);

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
            <Tab component={Link} label="Home" to ="/account" icon={<FontAwesomeIcon icon={faHouseUser} size="2x" fixedWidth></FontAwesomeIcon>} {...a11yProps(0)} /> 
            <Tab component={Link} label="Explore" to="/explorer" icon={<FontAwesomeIcon icon={faCompass} size="2x" fixedWidth></FontAwesomeIcon>}  {...a11yProps(1)} /> 
            <Tab component={Link} label="Haunted"  to="/haunted" icon={<FontAwesomeIcon icon={faGhost} size="2x" fixedWidth></FontAwesomeIcon>} {...a11yProps(2)} /> 
            <Tab component={Link} label="Historical" to="/historical" icon={<FontAwesomeIcon icon={faLandmark} size="2x" fixedWidth></FontAwesomeIcon>} {...a11yProps(3)} /> 
            <Tab component={Link} label="Film" to="/film" icon={<FontAwesomeIcon icon={faFilm} size="2x" fixedWidth></FontAwesomeIcon>} {...a11yProps(4)} /> 
            <Tab component={Link} label="Nature" to="/nature" icon={<FontAwesomeIcon icon={faTree} size="2x" fixedWidth></FontAwesomeIcon>} {...a11yProps(7)} /> 
            <Tab component={Link} label="Misc" to="/misc" icon={<FontAwesomeIcon icon={faTags} size="2x" ></FontAwesomeIcon>} {...a11yProps(5)} /> 

          </Tabs>
        </AppBar>
    </div>
  );
}





