import React, { Component } from 'react'
import Container from '@material-ui/core/Container';


export default class AboutPage extends Component {
    render() {
        return (
            <Container className="container-light" maxWidth="xl" disableGutters={true}>
                <h1>About Page</h1>
            </Container>
        )
    }
}
