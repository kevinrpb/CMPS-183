import React from 'react';

import Navbar from '../Navbar/Nav.jsx';

import './Listing.css';

const ListItem = (props) => {
	return (
		<div className="col-12 col-sm-4 col-md-3 col-lg-2">
			<div className="card text-center">
				<img src={props.item.img || "https://firebasestorage.googleapis.com/v0/b/textbookheroes-2df75.appspot.com/o/14310-illustration-of-an-open-book-pv.png?alt=media&token=be1d0171-1abd-4fd9-858a-9c955d1cc041"} alt="" className="card-img-top"/>
				<div className="card-body">
					<h5 className="card-title">{props.item.title || "Default title"}</h5>
					<h6 className="card-subtitle">{("$" + parseFloat(props.item.price).toFixed(2)) || 'No price'}</h6>
					<p className="card-text">{props.item.ISBN || 'No ISBN'}</p>
					<a href={"/listing/" + props.item.key} className="btn btn-primary">View Listing</a>
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
				<div id="listing" className="container-fluid row">
					{list}
				</div>
			</div>
		);
	}
}

export default Listing;