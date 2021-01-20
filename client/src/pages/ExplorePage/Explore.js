import React, { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';

import NavTabs from "../../components/NavTabs/NavTabs";
import Posts from "../../components/Posts/Posts";
import useStyles from '../../styles';
import { getPosts } from '../../actions/posts';
// import Form from "./components/Form/Form";
import { Container, Typography, Grow, Grid } from "@material-ui/core"



function Explore (){

    const [ setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getPosts());
      }, [dispatch])
    

    return(
        <div>
        <NavTabs />
      
        <Container maxwidth="lg">
      
        <Typography className={classes.heading} variant="h2" align="center"><br /> </Typography>
       
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing="3" >

              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                </Grid>

          </Grid>
        </Container>
      </Grow>
    </Container>

        </div>

    )
}

export default Explore;