import React from 'react';

import Navbar from '../Navbar/Nav.jsx';

import './Listing.css';

const ListItem = (props) => {
	return (
		<div className="col-12 col-md-4">
			<div className="card text-center">
				<img src={props.item.img} alt="" className="card-img-top"/>
				<div className="card-body">
					<h5 className="card-title">{props.item.title}</h5>
					<h6 className="card-subtitle">{props.item.subtitle}</h6>
					<p className="card-text">{props.item.description}</p>
					<a href={props.item.url} class="btn btn-primary">View Listing</a>
				</div>
			</div>
		</div>
	);
}

class Listing extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: props.data
		}
		console.log(props)
	}

	componentDidMount() {
	}

	render() {
		let list = [];
		
		for (let item of this.state.items) {
			list.push(<ListItem item={item} />)
		}

		return (
			<div>
				<Navbar navClass={'bg-danger'} />
				<div className="container">
					{list}
				</div>
			</div>
		);
	}
}

export default Listing;