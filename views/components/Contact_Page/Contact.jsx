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
      <center>
      <div class="contact-form">
      	<form method="post" action="mailto:textbookheroes@mail.com">
      	
		<input name="name" placeholder="What is your name?" class="contact-input-name" required />
		<br></br>
		
		<input name="emailaddress" placeholder="What is your email?" class="contact-input-email" type="email" required />
		<br></br>
		
    <textarea rows="4" cols="50" name="subject" placeholder="Please enter your message" class="contact-input-message" required></textarea>
    
    
    <input name="submit" class="contact-btn" type="submit" value="Send" />
    
</form>
</div>
      </center>
     
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

export default Contact;