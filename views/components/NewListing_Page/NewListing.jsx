import React from 'react';
import ReactDOM from 'react-dom';

import Navbar from '../Navbar/Nav.jsx';
import * as firebase from 'firebase';
import './NewListing.css';

class NewForm extends React.Component {
	constructor(props) {
		super(props);
		this.updateMail = this.updateMail.bind(this);
		this.state = {
			userMail: 'null'
		}
	}

	componentDidMount() {
        firebase.auth().onAuthStateChanged((user) => {this.updateMail(user)});
	}

	updateMail(user) {
		if (user) {
			this.setState({
				userMail: user.email.replace('.', ',')
			});
		} else {
			this.setState({
				userMail: 'null'
			});
		}
	}

	render() {
		return (
			<form action="/new" method="post" className="needs-validation">
				<div className="form-row">
					<div className="form-group col-12 col-md-4 col-lg-3">
						<label htmlFor="new-type"><div class="listing-field">Listing Type</div></label>
						<select name="type" id="new-type" className="form-control" required defaultValue="offers">
			      	<option value="offers">I want to sell...</option>
							<option value="requests">I want to buy...</option>
						</select>
					</div>
					<div className="form-group col-12 col-md-8 col-lg-9">
						<label htmlFor="new-title"><div class="listing-field">*Title</div></label>
						<input name="title" type="text" id="new-title" className="form-control" required defaultValue="" />
					</div>
					<div className="form-group col-12 col-md-4 col-lg-3">
						<label htmlFor="new-price"><div class="listing-field">*Price</div></label>
						<input name="price" type="number" id="new-price" className="form-control" required defaultValue="0.0" />
					</div>
					<div className="form-group col-12 col-md-8 col-lg-9">
						<label htmlFor="new-author"><div class="listing-field">*Author</div></label>
						<input name="author" type="text" id="new-author" className="form-control" required defaultValue="" />
					</div>
					<div className="form-group col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3">
						<label htmlFor="new-isbn"><div class="listing-field">ISBN</div></label>
						<input name="isbn" type="text" id="new-isbn" className="form-control" defaultValue="" />
					</div>
					<div className="form-group col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3">
						<label htmlFor="new-img"><div class="listing-field">Upload Book Cover URL</div></label>
						<input name="img" type="text" id="new-img" className="form-control" defaultValue="" />
					</div>
					<div className="form-group col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3">
						<label htmlFor="new-bookDescription"><div class="listing-field">Book Description (quality, etc)</div></label>
						<input name="bookDescription" type="text" id="new-bookDescription" className="form-control" defaultValue="" />
					</div>
					<div className="form-group col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3">
						<label htmlFor="new-edition"><div class="listing-field">Edition</div></label>
						<input name="edition" type="text" id="new-edition" className="form-control" defaultValue="" />
					</div>
					<div className="form-group col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3">
						<label htmlFor="new-course"><div class="listing-field">Course</div></label>
						<input name="course" type="text" id="new-course" className="form-control" defaultValue="" />
					</div>
					<div className="form-group col-12 col-md-8 offset-md-4 col-lg-9 offset-lg-3">
						<label htmlFor="new-tags"><div class="listing-field">Extra Tags (separated by comma)</div></label>
						<input name="tags" type="text" id="new-tags" className="form-control" defaultValue="" />
					</div>
					<div className="form-group" hidden>
						<input name="email" type="text" id="new-email" value={this.state.userMail} readOnly />
					</div>
					<div className="form-group col-12 col-md-6 offset-md-3 col-lg-4 offset-lg-4">
						<input type="submit" value="Submit" id="new-submit" className="btn btn-primary col"/>
					</div>
				</div>
			</form>
		);
	}
}

class NewListing extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Navbar navClass={'bg-danger custom'} />
				<div id="detail-search" className="container-fluid">
					<form action="/listing" className="col-12 col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
						<div className="row">
							<div className="form-group col-12 col-md-4 col-lg-3">
						    <select className="form-control" id="landing-search-select" name="type" defaultValue="offers">
						      <option value="offers">I want to buy...</option>
						      <option value="requests">I want to sell...</option>
						    </select>
							</div>
							<div className="form-group col-12 col-md-8 col-lg-6">
								<input type="text" className="form-control" id="landing-search-text" name="query" placeholder="Search textbook..." defaultValue="" />
							</div>
							<div className="form-group col-12 col-lg-3">
								<a className="glass"><button type="submit" className="btn btn-block btn-danger"><span className="fa fa-search"></span> Search</button></a>
							</div>
						</div>
					</form>
				</div>
				<div className="container">
					<div className="jumbotron" id="new-container">
					</div>
				</div>
			</div>
		);
	}
}

if (typeof window !== 'undefined') {
	const container = document.getElementById('new-container');
	if (container)
		ReactDOM.render(<NewForm />, container);
}

export default NewListing;