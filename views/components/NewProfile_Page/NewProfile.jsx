import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from '../Navbar/Nav.jsx';
import * as firebase from 'firebase';
import './NewProfile.css';

class NewProfile extends React.Component {
		constructor(props) {
		super(props);
	}

	componentDidMount() {
	}


	render() {
		return (
			<div>
				<Navbar navClass={'bg-danger custom'} />
				<br></br>
				<center><h2>Update Your Profile</h2></center>
			
			<center>
				<div className="container">
				
						<form action="/newprofile" method="post" className="needs-validation">
				<div className="form-row">
					<div className="form-group col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3">
						<label htmlFor="new-age">Age</label>
						<input name="age" type="text" id="new-age" className="form-control" required defaultValue="" />
					</div>
					<div className="form-group col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3">
						<label htmlFor="new-major">Major</label>
						<input name="major" type="text" id="new-major" className="form-control" required defaultValue="" />
					</div>
					<div className="form-group col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3">
						<label htmlFor="new-bio">Bio</label>
						<input name="bio" type="text" id="new-bio" className="form-control" defaultValue="" />
					</div>
					<div className="form-group col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
						<input type="submit" value="Submit" id="new-submit" className="btn btn-primary col"/>
					</div>
				</div>
			</form>
				</div>
				</center>
			</div>
		);
	}
}
export default NewProfile;