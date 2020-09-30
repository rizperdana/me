import React, { Component } from 'react';
import Navigation from './components/navigation'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Skills from './components/skills'

class App extends Component {
  render() {
    return (
    <React.Fragment>
      <Navigation />
      <About />
      <Experience />
      <Education />
      <Skills />
    </React.Fragment>
    );
  }
}

export default App;