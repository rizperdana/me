import React, { Component } from 'react';
import { Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';

export default class Navigation extends Component {
  	render() {
    return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
		  <a className="navbar-brand js-scroll-trigger" href="#page-top">
		    <span className="d-block d-lg-none">Clarence Taylor</span>
		    <span className="d-none d-lg-block"><img className="img-fluid img-profile rounded-circle mx-auto mb-2" src={process.env.PUBLIC_URL +'/assets/img/profile.jpg'} alt="" /></span>
		  </a>
		  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon" /></button>
		  <div className="collapse navbar-collapse" id="navbarSupportedContent">
		    <ul className="navbar-nav">
		    <Link className="nav-item" activeClass="active" to="AboutContainer"spy={true} smooth={true} hashSpy={true} offset={50} duration={500} delay={1000} isDynamic={true} onSetActive={this.handleSetActive} onSetInactive={this.handleSetInactive} ignoreCancelEvents={false}>
		    	<a className="nav-link" href="#about">About</a>
		    </Link>
		      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#experience">Experience</a></li>
		      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#education">Education</a></li>
		      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#skills">Skills</a></li>
		      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#interests">Interests</a></li>
		      <li className="nav-item"><a className="nav-link js-scroll-trigger" href="#awards">Awards</a></li>
		    </ul>
		  </div>
		</nav>
	</React.Fragment>
    )
  }
};