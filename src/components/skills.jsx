import React, { Component } from 'react';
import { Element } from 'react-scroll';

export default class Skills extends Component {
  render() {
    return (
    <Element id="SkillsContainer">
	  <section className="resume-section" id="skills">
	    <div className="resume-section-content">
	      <h2 className="mb-5">Skills</h2>
	      <div className="subheading mb-3">Programming Languages &amp; Tools</div>
	      <ul className="list-inline dev-icons">
	        <li className="list-inline-item"><i className="fab fa-html5" /></li>
	        <li className="list-inline-item"><i className="fab fa-css3-alt" /></li>
	        <li className="list-inline-item"><i className="fab fa-js-square" /></li>
	        <li className="list-inline-item"><i className="fab fa-python" /></li>
	        <li className="list-inline-item"><i className="fab fa-react" /></li>
	        <li className="list-inline-item"><i className="fab fa-node-js" /></li>
	        <li className="list-inline-item"><i className="fab fa-git" /></li>
	        <li className="list-inline-item"><i className="fab fa-yarn" /></li>
	        <li className="list-inline-item"><i className="fab fa-npm" /></li>
	        <li className="list-inline-item"><i className="fab fa-laravel" /></li>
	        <li className="list-inline-item"><i className="fab fa-linux" /></li>
	      </ul>
	      <div className="subheading mb-3">Workflow</div>
	      <ul className="fa-ul mb-0">
	        <li>
	          <span className="fa-li"><i className="fas fa-check" /></span>
	          Full-stack development
	        </li>
	        <li>
	          <span className="fa-li"><i className="fas fa-check" /></span>
	          Cross Browser Testing &amp; Debugging
	        </li>
	        <li>
	          <span className="fa-li"><i className="fas fa-check" /></span>
	          Project management
	        </li>
	        <li>
	          <span className="fa-li"><i className="fas fa-check" /></span>
	          Agile Development &amp; Scrum
	        </li>
	      </ul>
	    </div>
	  </section>
	  <hr className="m-0" />
	</Element>
    )
  }
};