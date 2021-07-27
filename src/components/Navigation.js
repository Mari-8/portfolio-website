import React, { Component } from 'react';

export default class App extends Component {
    state = {
        toggle:false
    }
    Toggle = () => {
        this.setState({toggle:!this.state.toggle})
    }
    render() {
        return (
          <>
              <div className="navBar">
                    <ul className="links">
                        <li href="#">Home</li>
                        <li href="#">About us</li>
                        <li href="#">Contact</li>
                    </ul>
              </div>
          </>
        );
    }
}
