import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import NameCard from '../components/NameCard'
import MainImage from '../components/MainImage'
import IntroCard from '../components/IntroCard'

export default class HomePage extends Component {

    render() {
        // maxWidth="xl" disableGutters={true}
        return (
          <Container id="home" className="container-dark home-page" disableGutters={true} maxWidth="xl">
            <Grid 
                container
            >
                <Grid item xs={12} sm={12} md={4}>
                    <NameCard /> 
                </Grid>
                <Grid item xs={12} sm={12} md={4}>
                    <MainImage /> 
                </Grid>
                    
                <Grid item xs={12} sm={12} md={4}>
                    <IntroCard /> 
                </Grid>
            </Grid>
          </Container>
        )
    }
}
