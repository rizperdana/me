import React, { Component } from 'react'
import { Element } from 'react-scroll';

export default class About extends Component {
  render() {
    return (
    <Element id="AboutContainer">
		<section className="resume-section" id="about">
		  <div className="resume-section-content">
		    <h1 className="mb-0">
		      Rizki
		      <span className="text-primary"> Perdana</span>
		    </h1>
		    <div className="subheading mb-5">
		      Tegalrejo · Yogyakarta, 55242 · <a href="https://wa.me/6289601361061">(62) 896-0136-1061</a> ·
		      <a href="mailto:perdana.rizki16@gmail.com">perdana.rizki16@gmail.com</a>
		    </div>
		    <p className="lead mb-5">I am experienced on full stack development using bleeding edge web technologies. Able to use any framework to apply great ideas and concept into full-functional system.</p>
		    <div className="social-icons">
		      <a className="social-icon" href="https://www.linkedin.com/in/rizkiperdana/" rel="noreferer nofollow noopener" target="_blank"><i className="fab fa-linkedin-in" /></a>
		      <a className="social-icon" href="https://www.github.com/rizperdana/" rel="noreferer nofollow noopener" target="_blank"><i className="fab fa-github" /></a>
		      <a className="social-icon" href="https://www.instagram.com/rizperdana" rel="noreferer nofollow noopener" target="_blank"><i className="fab fa-instagram" /></a>
		      <a className="social-icon" href="https://www.youtube.com/tuturustory" rel="noreferer nofollow noopener" target="_blank"><i className="fab fa-youtube" /></a>
		    </div>
		  </div>
		</section>
		<hr className="m-0" />
	</Element>
    )
  }
};