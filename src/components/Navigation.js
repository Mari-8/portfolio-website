import React, { Component } from 'react';

export default class App extends Component {
    

    render() {
        return (
            // <div className="navBar">
            //     <div className="logo">
            //         <h1>RA.</h1>
            //     </div>
            //     <div className="center">
            //         <div className="links">
            //             <a href="/">Home</a>
            //             <a href="/projects">Projects</a>
            //             <a href="/about">About me</a>
            //             <a href="/contact">Contact</a>
            //         </div>
            //     </div>
            // </div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div className="container-fluid content-center">
                  <a className="navbar-brand" href="/">RA.</a>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                  </button>
                  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav text-center">
                        <a className="nav-link" href="/">Home</a>
                        <a className="nav-link" href="/projects">Projects</a>
                        <a className="nav-link" href="/about">About Me</a>
                        <a className="nav-link" href="/contact">Contact</a>
                    </div>
                  </div>
                </div>
            </nav>
        );
    }
}
