import React from 'react';

import Navbar from '../Navbar/Nav.jsx';

import './ListingResult.css';

const ListItem = (props) => {
	return (
		<div className="col-12 col-sm-4 col-md-3 col-lg-2">
			<div className="card text-center">
				<img src={props.item.img || "https://firebasestorage.googleapis.com/v0/b/textbookheroes-2df75.appspot.com/o/14310-illustration-of-an-open-book-pv.png?alt=media&token=be1d0171-1abd-4fd9-858a-9c955d1cc041"} alt="" className="card-img-top"/>
				<div className="card-body">
					<h5 className="card-title">{props.item.title || "Default title"}</h5>
					<h6 className="card-subtitle">{("$" + parseFloat(props.item.price).toFixed(2)) || 'No price'}</h6>
					<p className="card-text">{props.item.ISBN || 'No ISBN'}</p>
					<a href={"/listing/" + props.type + "/" + props.item.key} className="btn btn-primary">View Listing</a>
				</div>
			</div>
		</div>
	);
}

class ListingResult extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			items: props.data.items,
			type: props.data.type,
			query: props.data.query
		}
	}

	componentDidMount() {
	}

	render() {
		let list = [];
		
		for (let item of this.state.items) {
			list.push(<ListItem type={this.state.type} key={item.key} item={item} />)
		}

		return (
			<div>
				<Navbar navClass={'bg-danger'} />
				<div id="listing-search" className="container-fluid">
					<form action="/listing" className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
						<div className="row">
							<div className="form-group col-12 col-md-4 col-lg-3">
						    <select className="form-control" id="landing-search-select" name="type" defaultValue={this.state.type || "offers"}>
						      <option value="offers">I want to buy...</option>
						      <option value="requests">I want to sell...</option>
						    </select>
							</div>
							<div className="form-group col-12 col-md-8 col-lg-6">
								<input type="text" className="form-control" id="landing-search-text" name="query" placeholder="Search textbook..." defaultValue={this.state.query || ""} />
							</div>
							<div className="form-group col-12 col-lg-3">
								<a className="glass"><button type="submit" className="btn btn-block btn-danger"><span className="fa fa-search"></span> Search</button></a>
							</div>
						</div>
					</form>
				</div>
				<div id="listing-result" className="container-fluid row">
					{list}
				</div>
			</div>
		);
	}
}

export default ListingResult;