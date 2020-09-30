import React, { Component } from 'react';
import './navigation.css';
import { Link, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class Navigation extends Component {
  	render() {
    return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
		  <a className="navbar-brand">
		    <span className="d-block d-lg-none">Clarence Taylor</span>
		    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={process.env.PUBLIC_URL +'/assets/img/profile.jpg'} alt="" /></span>
		  </a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav">
		    <div className="nav-item">
			    <Link className="nav-link" activeClass="active" to="AboutContainer" spy={true} smooth={true} hashSpy={true} duration={500} isDynamic={true} onSetActive={this.handleSetActive} onSetInactive={this.handleSetInactive} ignoreCancelEvents={false}>
			    	About
			    </Link>
			    <Link className="nav-link" activeClass="active" to="ExperienceContainer" spy={true} smooth={true} hashSpy={true} duration={500} isDynamic={true} onSetActive={this.handleSetActive} onSetInactive={this.handleSetInactive} ignoreCancelEvents={false}>
			    	Experience
			    </Link>
			    <Link className="nav-link" activeClass="active" to="EducationContainer" spy={true} smooth={true} hashSpy={true} duration={500} isDynamic={true} onSetActive={this.handleSetActive} onSetInactive={this.handleSetInactive} ignoreCancelEvents={false}>
			    	Education
			    </Link>
			    <Link className="nav-link" activeClass="active" to="SkillsContainer" spy={true} smooth={true} hashSpy={true} duration={500} isDynamic={true} onSetActive={this.handleSetActive} onSetInactive={this.handleSetInactive} ignoreCancelEvents={false}>
			    	Skills
			    </Link>
			    <Link className="nav-link" activeClass="active" to="InterestsContainer" spy={true} smooth={true} hashSpy={true} duration={500} isDynamic={true} onSetActive={this.handleSetActive} onSetInactive={this.handleSetInactive} ignoreCancelEvents={false}>
			    	Interests
			    </Link>
			    <Link className="nav-link" activeClass="active" to="AwardsContainer" spy={true} smooth={true} hashSpy={true} duration={500} isDynamic={true} onSetActive={this.handleSetActive} onSetInactive={this.handleSetInactive} ignoreCancelEvents={false}>
			    	Awards
			    </Link>
		    </div>
		    </ul>
		  </div>
		</nav>
	</React.Fragment>
    )
  }
};