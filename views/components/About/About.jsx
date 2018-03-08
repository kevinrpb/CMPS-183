import React from 'react';
import Navbar from '../Navbar/Nav.jsx';

import './About.css';

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
			<br></br>
			<br></br>
			<br></br>
					
<div class="panel"><center>
<p>Textbook Exchange  (EDIT)<br></br>
For the curious pupils seeking to seize interesting sciences, learn and get high marks at school it is very important to have good teachers and to have all necessary textbooks in your home library. Our website significantly will help you with it and will allow to gain knowledge almost free of charge.</p></center></div>
			

			


		     	
			</div>

		);
	}

}

export default About;