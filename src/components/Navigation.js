import React, { Component } from 'react';

export default class App extends Component {
    

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark"> 
                <div className="container-fluid content-center">
                 
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="navb-content collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav d-md-flex d-block flex-row mx-md-auto mr-0">
                        <a className="nav-link" href="/">Home</a>
                        <a className="nav-link" href="/">Projects</a>
                        <a className="nav-link" href="/about">About Me</a>
                        <a className="nav-link" href="/contact">Contact</a>
                    </div>
                  </div>
                </div>
            </nav>
        );
    }
}
