import React, { useState, useEffect } from 'react';
import PublicPosts from "../../components/Posts/PublicPosts.js";
import { useDispatch } from 'react-redux';
import { getMisc } from '../../actions/posts';
import { Container, Typography, Grow, Grid } from "@material-ui/core"
import useStyles from '../../styles';

const RenderMisc = () => {
  const [setCurrentId] = useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMisc());
  }, [dispatch])

  return (
    <div>
      <Container maxwidth="lg">

        <Typography className={classes.heading} variant="h2" align="center"><br /> </Typography>

        <Grow in>
          <Container>
            <Grid container justify="center" alignItems="stretch" spacing="2" >
              <Grid item xs={12} sm={10} md={9} lg={9}>
                <PublicPosts setCurrentId={setCurrentId} />
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

export default RenderMisc;