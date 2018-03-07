import React from 'react';

import Navbar from '../Navbar/Nav.jsx';

import './Profile.css';

const User = (props) => {
	return (
		<center>
				<img src={"https://firebasestorage.googleapis.com/v0/b/textbookheroes-2df75.appspot.com/o/822711_user_512x512.png?alt=media&token=5d733b17-00a9-4852-9ef3-87c2f3318fee"} alt="" width="150" height="150"/>
			</center>
	);
}

class Profile extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			name: props.data,
			email: props.data,
		}
	}

	componentDidMount() {
	}

	render() {
	

		return (
			<div>
				<Navbar navClass={'bg-danger'} />		
				<User items={this.state.name}/>
			</div>
		);
	}
}

export default Profile;