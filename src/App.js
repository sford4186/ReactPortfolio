import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Nav from './components/Nav.js';

import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import NoMatch from "./pages/NoMatch";
import './App.css'

function App() {
  return (
    
    <Router>

      <Nav />
        {/* <Header/> */}
        <div id="main">
        <Switch>
          <Route exact path="/">
            <About />
          </Route>
          <Route exact path="/education">
            <Education />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/experience">
            <Experience />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/skills">
            <Skills />
          </Route>
         
        </Switch>
        </div>
        <Footer/>

      
    </Router>
    
  );
}


// <Route>
// <NoMatch />
// </Route>


export default App;
