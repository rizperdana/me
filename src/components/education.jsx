import React, { Component } from 'react';
import { Element } from 'react-scroll';

export default class Education extends Component {
  render() {
    return (
    <Element id="EducationContainer">
	  <section className="resume-section" id="education">
	    <div className="resume-section-content">
	      <h2 className="mb-5">Education</h2>
	      <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
	        <div className="flex-grow-1">
	          <h3 className="mb-0">Yogyakarta State University</h3>
	          <div className="subheading mb-3">Bachelor of Economics</div>
	          <div>Accounting - Majoring on Accounting Information System</div>
	        </div>
	        <div className="flex-shrink-0"><span className="text-primary">June 2016 - February 2020</span></div>
	      </div>
	    </div>
	  </section>
	  <hr className="m-0" />
	</Element>
    )
  }
};