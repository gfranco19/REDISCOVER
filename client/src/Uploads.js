import React, { useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
// this allows us to dispatch an action // 
import { useDispatch } from 'react-redux';
import './uploads.css';
import { getPosts } from './actions/posts';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import UserUploads from "./assets/images/UserUploads.png";
import useStyles from './styles';


const Uploads = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return(
    <Container maxidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center"><br /> </Typography>
        <img src={UserUploads} alt="uploads" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing="3" >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={4}>
                  <Form />
                </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  )
}


export default Uploads;