import React, { Component } from 'react';
import Navigation from './components/navigation'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Skills from './components/skills'
import Interests from './components/interests'
import Awards from './components/awards'

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Navigation />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Interests />
      <Awards />
    </React.Fragment>
    );
  }
}

export default App;