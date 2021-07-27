import React, { Component } from 'react'; 
import './App.css';
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import ProjectsPage from './pages/ProjectsPage'
import AboutPage from './pages/AboutPage'
import Navigation from './components/Navigation'
import Button from '@material-ui/core/Button';

import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation /> 
          <Route exact path='/' component={HomePage} /> 
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/projects' component={ProjectsPage} /> 
          <Route exact path='/about' component={AboutPage} /> 
      </Router>
    );
  }
}

export default App;
