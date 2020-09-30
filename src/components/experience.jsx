import React, { Component } from 'react';
import { Element } from 'react-scroll';

export default class Experience extends Component {
  render() {
	return (
		<Element id="ExperienceContainer">
		  <section className="resume-section" id="experience">
			<div className="resume-section-content">
			  <h2 className="mb-5">Experience</h2>
			  <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
				<div className="flex-grow-1">
				  <h3 className="mb-0">Application Support</h3>
				  <div className="subheading mb-3">Gamatechno Indonesia</div>
				  <p>
					I recently have joined PT. Gamatechno Indonesia as a Application Support in the IT Project Segment.
					My major part of the work has been into the field of application quality control and project administration which helping the team to maintain the project flow development.
					I am also exploring the role of full stack development using technology like ReactJS, NodeJS, Django, and container like Webpack.
				  </p>
				</div>
				<div className="flex-shrink-0"><span className="text-primary">February 2020 - Present</span></div>
			  </div>
			  <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
				<div className="flex-grow-1">
				  <h3 className="mb-0">Internship</h3>
				  <div className="subheading mb-3">Directorate General of Taxes of the Republic of Indonesia</div>
				  <p>
				  	I am on intereship Campus program at the office of the Directorate General of Taxes of the Republic of Indonesia.
					The focus of my task here is to analyze taxpayer data that is deposited manually by taxpayers of 1,000 total personal tax reports.
					In addition, I conducted data observations and eliminated redundant and duplicated taxpayer data.
				  </p>
				</div>
				<div className="flex-shrink-0"><span className="text-primary">September 2019 - November 2020</span></div>
			  </div>
			  <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
				<div className="flex-grow-1">
				  <h3 className="mb-0">Customer Service Officer</h3>
				  <div className="subheading mb-3">Sale Stock Indonesia</div>
				  <p>
				  	Resolved customer concerns efficiently and expeditiously, answering approximately 100 user per day and achieved 100% of chat performance goals for accuracy, speed, volume, resolution of issues, and customer satisfaction.
				  </p>
				</div>
				<div className="flex-shrink-0"><span className="text-primary">January 2016 - August 2017</span></div>
			  </div>
			  <div className="d-flex flex-column flex-md-row justify-content-between">
				<div className="flex-grow-1">
				  <h3 className="mb-0">Full-Stack Developer</h3>
				  <div className="subheading mb-3">Diginet Media</div>
				  <p>
				  	My first experience as a Full-Stack Developer I got here by building over 50 government projects.
				  	I focused my task on developing project for licensing information systems, monitoring and evaluation systems, staffing systems, medical device systems, and regional funding systems.
				  	I developed the system using PHP frameworks like Laravel, YII 2, and Codeigniter.
				  </p>
				</div>
				<div className="flex-shrink-0"><span className="text-primary">June 2014 - December 2015</span></div>
			  </div>
			</div>
		  </section>
		  <hr className="m-0" />
		</Element>
	)
  }
};