import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import HomeIcon from '@material-ui/icons/Home';
import ExploreIcon from '@material-ui/icons/Explore';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import HelpIcon from '@material-ui/icons/Help';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ErrorIcon from '@material-ui/icons/Error';
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
        fontFamily: 'Fira Mono', 

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
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          classes={{ root: classes.root, scroller: classes.scroller }}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab component={Link} label="Home" to ="/" icon={<HomeIcon />} {...a11yProps(0)} />
          <Tab component={Link} label="Explore" to="/explorer" icon={<ExploreIcon />} {...a11yProps(1)} />
          <Tab component={Link} label="Haunted"  to="/haunted" icon={<ErrorIcon />} {...a11yProps(2)} />
          <Tab component={Link} label="Historical" to="/historical" icon={<MenuBookIcon />} {...a11yProps(3)} />
          <Tab component={Link} label="Film" to="/film" icon={<GroupWorkIcon />} {...a11yProps(4)} />
          <Tab component={Link} label="Misc" to="/misc" icon={<HelpIcon />} {...a11yProps(5)} />
          <Tab component={Link} label="My Account" to="/account" icon={<AccountCircleIcon />} {...a11yProps(6)} />
          <Tab component={Link} label="Example" to="/example" icon={<BookmarkIcon />} {...a11yProps(7)} />

        </Tabs>
      </AppBar>
    </div>
  );
}

// root: {
//     flexGrow: 1,
//     justifyContent: "center",
//     width: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// }));
