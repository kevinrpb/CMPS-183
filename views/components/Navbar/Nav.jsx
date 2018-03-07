import React from 'react';
import fb from '../../../Firebase';
import ReactDOM from 'react-dom';
import UserLink from '../UserLink/UserLink.jsx';
import './Nav.css'

class Navbar extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<nav className={"navbar navbar-expand navbar-dark " + this.props.navClass}>
				<div className="icon-spin">
					<a className="navbar-brand" href="/">
						<img src="/img/logo-no-bg.png" height="35" width="100" alt=""/>
					</a>
				</div>

				<ul className="navbar-nav ml-auto" id="navBar">
				</ul>
			</nav>
		);
	}
}

if (typeof window !== 'undefined') {
	const container = document.getElementById('navBar');
	let isSignedIn = fb.isUserSignedIn();
	console.log("Signed in: " + isSignedIn);
	ReactDOM.render(<UserLink props={{signedIn: isSignedIn }} />, container);
}

export default Navbar;