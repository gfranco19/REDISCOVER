import React, { useEffect } from 'react';
import { Container, Grow, Grid } from "@material-ui/core"
import { useDispatch } from 'react-redux';
import './uploads.css';
import { getPosts } from './actions/posts';
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form";
import useStyles from './styles';
import NavTabs from "./components/NavTabs/NavTabs";


const Uploads = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch])

  return (
    <div className="exploreBackground">

      <NavTabs />
      <div className="center">
        <br /><br /><br />
        <h2>Share your experiences with your fellow explorers!</h2>
        <Form />
        </div>

      <Container maxwidth="lg">
        {/* <Typography className={classes.heading} variant="h2" align="center"><br /> </Typography> */}

        <Grow in>
          <Container>
            <Grid container justify="space-between" alignItems="stretch" spacing="3" >
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              {/* <Grid item xs={12} sm={4}>
              <br/>  */}
              {/* <Form /> */}
              {/* </Grid> */}
            </Grid>
          </Container>
        </Grow>
      </Container>
    </div>

  )
}


export default Uploads;