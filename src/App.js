import React, { Component } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import SkillsPage from "./pages/SkillsPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import Navigation from "./components/Navigation";

import { BrowserRouter as Router, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <Navigation />
        <HomePage />
        <SkillsPage />
        <ProjectsPage />
        <AboutPage />
        <ContactPage /> 
        {/* <Route exact path='/' component={HomePage} /> 
          <Route exact path='/contact' component={ContactPage} />
          <Route exact path='/projects' component={ProjectsPage} /> 
          <Route exact path='/about' component={AboutPage} />  
        */}
      </Router>
    );
  }
}

export default App;
