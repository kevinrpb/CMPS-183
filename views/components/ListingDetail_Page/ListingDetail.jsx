import React from 'react';

import Navbar from '../Navbar/Nav.jsx';

import './ListingDetail.css';

class ListingDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			item: props.data.item,
			type: props.data.type
		}
	}

	componentDidMount() {
	}

	render() {

		return (
			<div>
				<Navbar navClass={'bg-danger'} />
				<div id="listing-detail" className="container-fluid row">
					{this.state.type + "/" + this.state.item}
				</div>
			</div>
		);
	}
}

export default ListingDetail;