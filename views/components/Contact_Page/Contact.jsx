import React from 'react';
import Navbar from '../Navbar/Nav.jsx';

import './Contact.css';
import '../../global.css';

class Contact extends React.Component {
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
        <span>Contact Us</span>
      </h2>
      <p class="hero-content glass">
        <span></span>
      </p>

      <p class="hero-content glass">
        <span></span>
      </p>
  </div>
</div>
</center>
</div>
<div class="about"> 
   					<a href="/about">About</a>
   					</div>
					<div className="copyright">
			  		<center> <p>© 2018 Textbook Heroes. All rights reserved </p></center>
		     	</div>
					

			

			


		     	
			</div>

		);
	}

}

export default Contact;