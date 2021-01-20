import React, { useState, useEffect } from 'react';
import { Container, Typography, Grow, Grid } from "@material-ui/core"
// this allows us to dispatch an action // 
import { useDispatch } from 'react-redux';
import './uploads.css';
import { getPosts } from './actions/posts';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
// import whitelogo from "./assets/images/whitelogo.png";
import useStyles from './styles';



const Uploads = () => {
  const [currentId, setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();


  // using currentId will dispatch the updated content immediately instead of needing to refresh the page. 
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch])

  return (
    <div className="exploreBackground">

    <div>
   

        <br/> <br/>
          <h2>Share your experiences with your fellow explorers!</h2>

    <Container maxwidth="lg">
      
        <Typography className={classes.heading} variant="h2" align="center"><br /> </Typography>
       
     
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing="3" >

              <Grid item xs={12} sm={7}>
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