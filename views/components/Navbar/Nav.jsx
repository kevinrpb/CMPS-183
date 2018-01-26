import React from 'react';
import './Nav.scss'

const UserLink = (props) => {
	if (props.userLogged) {
		return (
			<li className="nav-item dropdown active">
				<a class="nav-link dropdown-toggle" href="#" id="navbar-user-name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				{props.user.username}
				</a>
				<div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-user-name">
					<a class="dropdown-item" href="/profile"><span class="fa fa-user-circle"></span> Profile</a>
					<a class="dropdown-item" href="/profile/listings"><span class="fa fa-list"></span> My Listings</a>
					<div class="dropdown-divider"></div>
					<a class="dropdown-item" href="/logout"><span class="fa fa-sign-out-alt"></span> Log Out</a>
				</div>
			</li>
			);
	} else {
		return (
			<li className="nav-item">
				<a href="/login" className="nav-link active">
					<span class="fa fa-user-circle"></span> Login
				</a>
			</li>
			);
	}
}

class Navbar extends React.Component {
	render() {
		const user = {
			username: "SampleUser123"
		}
		return (
			<nav class="navbar navbar-expand navbar-dark bg-dark">
			<a class="navbar-brand" href="#"><img src="./logo-no-bg.png" height="30" alt=""/></a>

			<ul class="navbar-nav ml-auto">
			<UserLink userLogged={user ? true : false} user={user}/>
			</ul>
			</nav>
			);
	}
}

export default Navbar;