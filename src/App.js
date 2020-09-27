import React, { Component } from 'react';
import './App.css';
import Header from './components/header'
import Profile from './components/profile'
import About from './components/about'
import Experience from './components/experience'
import Education from './components/education'
import Portofolio from './components/portofolio'
import Skill from './components/skill'
import Reference from './components/reference'
import Contact from './components/contact'
import Footer from './components/footer'

class App extends Component {
  render() {
    return(
      <div className="page-content">
        <Header/>
        <Profile/>
        <About/>
        <Experience/>
        <Education/>
        <Portofolio/>
        <Skill/>
        <Reference/>
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
