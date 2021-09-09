import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import ServicesChunk from '../components/ServicesChunk'
import SkillLogos from '../components/SkillLogos'
import Grid from '@material-ui/core/Grid';

export default class SkillsPage extends Component {
    render() {
        return (
            <Container id="skills" className="container-light" maxWidth="xl" disableGutters={true}>
                <Grid container>
                    <Grid item xs={12} sm={12} md={12}>
                        <ServicesChunk /> 
                    </Grid>
                     
                    <Grid item xs={12} sm={12} md={12}>
                        <SkillLogos /> 
                    </Grid>
                    
                </Grid>
            </Container>
        )
    }
}
