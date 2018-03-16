import React from 'react';

import Navbar from '../Navbar/Nav.jsx';

import './ListingDetail.css';
import '../../global.css';

class ListingDetail extends React.Component {
	constructor(props) {
		super(props);
		this.updateMail = this.updateMail.bind(this);
		this.state = {
			item: props.data.item,
			type: props.data.type,
		}
	}

	componentDidMount() {
		firebase.auth().onAuthStateChanged((user) => {this.updateMail(user)});
	}

	updateMail(user) {
		this.setState({
				userMail: user.email.replace('.', ',')
			});
		// if (user) {
		// 	this.setState({
		// 		userMail: user.email.replace('.', ',')
		// 	});
		// } else {
		// 	this.setState({
		// 		userMail: 'null'
		// 	});
		// }
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
								<img src={this.state.item.img || "https://firebasestorage.googleapis.com/v0/b/textbookheroes-2df75.appspot.com/o/14310-illustration-of-an-open-book-pv.png?alt=media&token=be1d0171-1abd-4fd9-858a-9c955d1cc041"} alt="" className="img-fluid img-thumbnail rounded" />
							</div>
							<div className="info col-12 col-md-9 col-lg-7">
								<h1 className="text-center">{this.state.item.title || "No listing title"}</h1>
								<h6 className="text-center">{(this.state.item.author || "No author") + " - ISBN: " + (this.state.item.isbn || "No listing ISBN")}</h6>
								<h6 className="text-center">{((new Date(this.state.item.date)).toLocaleDateString('en-US') || "No listing date") + " - $" + (this.state.item.price || "No listing price") + " - "}<a href={"/viewuser/users" + "/" + this.state.item.email.replace(".", ",")} className="btn btn-primary">View Profile & Contact</a></h6>
								<p className="text-justify listing-description">{this.state.item.description || "No listing description"}</p>
							</div>
						</div>
					</div>
				</div>
				<div className="about"> 
   					<a href="/about">About</a>
   					</div>
					<div className="copyright">
			  		<center> <p>© 2018 Textbook Heroes. All rights reserved </p></center>
		     	</div>
			</div>
		);
	}
}

export default ListingDetail;