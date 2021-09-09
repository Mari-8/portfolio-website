import React, { Component } from 'react'
import Container from '@material-ui/core/Container';
import ContactIntro from '../components/ContactIntro'
import ContactCards from '../components/ContactCards'

export default class ContactPage extends Component {
    render() {
        return (
            <Container id="contact" className="container-dark contact" maxWidth="xl" disableGutters={true}>
                <ContactIntro />
                <ContactCards /> 
            </Container>
            
        )
    }
}
