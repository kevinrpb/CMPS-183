import React from 'react';

import Navbar from '../Navbar/Nav.jsx';

import './Profile.css';

class Profile extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<Navbar bg={true} />
				<p>This is profile</p>
			</div>
		);
	}
}

export default Profile;