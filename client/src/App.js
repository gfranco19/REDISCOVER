import React from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"

import UserUploads from "./images/UserUploads.png"

const App = () => {
  return(
    <Container maxidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">This will be the Homepage?</Typography>
        <img src={UserUploads} alt="uploads" height="180" />
      </AppBar>
    </Container>
  )
}


export default App;