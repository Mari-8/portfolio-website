import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Grid from '@material-ui/core/Grid';
import AboutSectionOne from '../components/AboutSectionOne'
import AboutSectionTwo from '../components/AboutSectionTwo'
import AboutSectionThree from '../components/AboutSectionThree'

export default class AboutPage extends Component {
  render() {
    return (
      <Container
        id="about"
        className="container-light about"
        maxWidth="xl"
        disableGutters={true}
      >
      <div className="about-grid">
        <h1 className="blue-color about-header">About Me</h1>
        <Grid
          container
          direction="row"
          justifyContent="space-around"
          alignItems="center"
        >
            <Grid item>
                <AboutSectionOne />
            </Grid>
            <Grid item>
                <AboutSectionTwo /> 
            </Grid>
            <Grid item>
                <AboutSectionThree /> 
            </Grid>
        </Grid>
      </div>
      </Container>
    );
  }
}
