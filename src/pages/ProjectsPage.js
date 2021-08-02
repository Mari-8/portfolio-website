import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import ServicesChunk from '../components/ServicesChunk'
import SkillLogos from '../components/SkillLogos'

export default class ProjectsPage extends Component {
    render() {
        return (
            <Container className="container-light" maxWidth="xl" disableGutters={true}>
                <ServicesChunk /> 
                <br /> <br /><br /> 
                <SkillLogos />
            </Container>
        )
    }
}
