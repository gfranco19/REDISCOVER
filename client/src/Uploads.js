import React, { useState, useEffect } from 'react';
import { Container, Grow, Grid, Typography } from "@material-ui/core"
import Posts from "./components/Posts/Posts";
import { useDispatch } from 'react-redux';
import './uploads.css';
import { getPosts } from './actions/posts';
import Form from "./components/Form/Form";
import useStyles from './styles'


const Uploads = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <div className="exploreBackground">
    <div>
    <Container maxwidth="lg">
      <Typography className={classes.heading} variant="h2" align="center"><br /> </Typography>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing="3" >
            <Grid item xs={12} sm={6}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
    </div>
    </div>
  )
}

export default Uploads;