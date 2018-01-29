import React from 'react';
import './Nav.css'

const UserLink = (props) => {
	if (props.userLogged) {
		return (
			<li className="nav-item dropdown active">
				<a className="nav-link dropdown-toggle" href="#" id="navbar-user-name" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				{props.user.username}
				</a>
				<div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbar-user-name">
					<a className="dropdown-item" href="/profile"><span className="fa fa-user-circle"></span> Profile</a>
					<a className="dropdown-item" href="/profile/listings"><span className="fa fa-list"></span> My Listings</a>
					<div className="dropdown-divider"></div>
					<a className="dropdown-item" href="/logout"><span className="fa fa-sign-out-alt"></span> Log Out</a>
				</div>
			</li>
			);
	} else {
		return (
			<li className="nav-item">
				<a href="/login" className="nav-link active">
					<span className="fa fa-user-circle"></span> Login
				</a>
			</li>
		);
	}
}

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		const user = {
			username: "SampleUser123"
		}
		return (
			<nav className={"navbar navbar-expand navbar-dark" + (this.props.bg ? "bg-dark" : "")}>
				<div className="icon-spin">
					<a className="navbar-brand" href="/">
						<img src="./logo-no-bg.png" height="35" width="100" alt=""/>
					</a>
				</div>

				<ul className="navbar-nav ml-auto">
					<UserLink userLogged={user ? true : false} user={user}/>
				</ul>
			</nav>
			);
	}
}

export default Navbar;