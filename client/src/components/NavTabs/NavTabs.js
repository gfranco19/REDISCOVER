import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";

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
  const [value, setValue] = React.useState(0)
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          classes={{ root: classes.root, scroller: classes.scroller }}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="default"
          textColor="primary"
        // aria-label="scrollable force tabs example"
        >
          <Tab component={Link} label="Account" to="/account" style={{ textDecoration: 'none' }} icon={<HomeIcon />} {...a11yProps(0)} />
          <Tab component={Link} label="Explore" to="/explorer" style={{ textDecoration: 'none' }} icon={<ExploreIcon />} {...a11yProps(5)} />
        </Tabs>
      </AppBar>
    </div>
  );
}


