import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NameCard from '../components/NameCard'
import MainImage from '../components/MainImage'
import IntroCard from '../components/IntroCard'


export default class HomePage extends Component {

    render() {
        return (
          <Container className="container-dark" maxWidth="xl" disableGutters={true}>
              <br/>
              <br/>
              <br/>
              <br/>
            <Grid 
                container 
                spacing={6}
                direction="row"
                justifyContent="space-around"
                alignItems="center"
            >
                <Grid item xs>
                    <NameCard /> 
                </Grid>
                <Grid item xs>
                    <MainImage /> 
                </Grid>
                <Grid item xs>
                    <IntroCard /> 
                </Grid>
            </Grid>
          </Container>
        )
    }
}
