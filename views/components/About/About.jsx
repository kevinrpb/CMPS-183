import React from 'react';
import Navbar from '../Navbar/Nav.jsx';

import './About.css';
import '../../global.css';

class About extends React.Component {
	constructor() {
		super();
	}

	componentWillMount() {
	}

	render() {
		return (
			<div>
    		<Navbar navClass={'bg-danger'} />
		
			<div class="content-container">
			<center><div class="hero-container">
  <div class="hero">
      <h2 class="hero-title glass">
        <span>Abous Us</span>
      </h2>
      <p class="hero-content glass">
        <span>TextBook Heros is an online platform to post, share & exchange textbooks.</span>
      </p>

      <p class="hero-content glass">
        <span>With our tool, You can find what you are searching for within seconds! Just sign in and start connecting.</span>
      </p>
  </div>
</div>
</center>
</div>
<div class="about"> 
   					<a href="/about">About</a>
   					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   					<a href="/contact">Contact</a>
   					</div>
					<div className="copyright">
			  		<center> <p>© 2018 Textbook Heroes. All rights reserved </p></center>
		     	</div>
					

			

			


		     	
			</div>

		);
	}

}

export default About;