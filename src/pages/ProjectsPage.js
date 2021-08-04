import React, { Component } from 'react'
import Container from '@material-ui/core/Container'
import PortfolioIntro from '../components/PortrolioIntro'
import Projects from '../components/Projects'

export default class ProjectsPage extends Component {
    render() {
        return (
            <Container className="container-dark" maxWidth="xl" disableGutters={true}>
                <PortfolioIntro />
                <br /> <br /> <br /> 
                <Projects /> 
    
            </Container>
        )
    }
}
