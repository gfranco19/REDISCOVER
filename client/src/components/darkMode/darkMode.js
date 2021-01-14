import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core";
import { createMuiTheme, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Brightness3Icon from "@material-ui/icons/Brightness3";
import Brightness7Icon from "@material-ui/icons/Brightness7";
import { CssBaseline } from '@material-ui/core';
import "./darkMode.css"

const useStyles = makeStyles(theme => ({
  root: {
    "& .MuiPaper-root": {
      borderRadius: "100px",
      backgroundColor: "transparent"
    }
  }
}));


function DarkMode() {
  const [theme, setTheme] = useState(true);
  const classes = useStyles();
  const icon = !theme ? <Brightness7Icon /> : <Brightness3Icon />;
  const appliedTheme = createMuiTheme(theme ? light : dark);

  return (
    <ThemeProvider theme={appliedTheme}>
      <CssBaseline />
      <Paper elevation={0} >
        <div className={classes.root}>
          <IconButton edge="end" color="inherit" aria-label="mode" onClick={() => setTheme(!theme)}>
            {icon}
          </IconButton>
        </div>
      </Paper>
    </ThemeProvider>
  );
}

export const light = {
  palette: {
    type: "light"
  }
};
export const dark = {
  palette: {
    type: "dark"
  }
};
export default (DarkMode);
