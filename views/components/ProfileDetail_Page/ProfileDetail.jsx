import React from 'react';

import Navbar from '../Navbar/Nav.jsx';

import './ProfileDetail.css';

class ProfileDetail extends React.Component {
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
				<div id="detail-search" className="container-fluid">
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
				<div id="listing-detail" className="container">
					<div className="jumbotron">
						<div className="row">
							<div className="img col-12 col-md-3 col-lg-5">
								<img src={this.state.item.img || "https://firebasestorage.googleapis.com/v0/b/textbookheroes-2df75.appspot.com/o/822711_user_512x512.png?alt=media&token=ed3e79fc-ea23-4afd-a93b-9cb32c734965"} alt="" className="img-fluid img-thumbnail rounded" />
							</div>
							<div className="info col-12 col-md-9 col-lg-7">
								<h1 className="text-center">{this.state.item.name || "No listing title"}</h1>
								<h6 className="text-center"><a href={"mailto:" + this.state.item.email}>{this.state.item.email}</a></h6>
								<p className="text-justify listing-description">{this.state.item.description || "No profile description"}</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProfileDetail;