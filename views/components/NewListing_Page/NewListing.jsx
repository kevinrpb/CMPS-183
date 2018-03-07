import React from 'react';

import Navbar from '../Navbar/Nav.jsx';

import './NewListing.css';

class NewListing extends React.Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
				<Navbar navClass={'bg-danger custom'} />
				<p>This is new listing</p>
			</div>
		);
	}
}

export default NewListing;