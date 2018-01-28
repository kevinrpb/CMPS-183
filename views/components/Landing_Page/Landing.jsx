import React from 'react';

import Navbar from '../Navbar/Nav.jsx';

import './Landing.css';

const LandingCarousel = (props) => {

	return (
		<div id="landing-carousel" className="carousel slide" data-ride="carousel">
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img src="./img/books0.jpg" alt="" className="d-block"/>
				</div>
				<div className="carousel-item">
					<img src="./img/books.jpg" alt="" className="d-block"/>
				</div>
				<div className="carousel-item">
					<img src="./img/books1.jpg" alt="" className="d-block"/>
				</div>
				<div className="carousel-item">
					<img src="./img/books2.jpg" alt="" className="d-block"/>
				</div>
				<div className="carousel-item">
					<img src="./img/books3.jpg" alt="" className="d-block"/>
				</div>
				<div className="carousel-item">
					<img src="./img/books4.jpg" alt="" className="d-block"/>
				</div>
				<div className="carousel-item">
					<img src="./img/books5.jpg" alt="" className="d-block"/>
				</div>
			</div>
		  <a className="carousel-control-prev" href="#landing-carousel" role="button" data-slide="prev">
			  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
			  <span className="sr-only">Previous</span>
			</a>
			<a className="carousel-control-next" href="#landing-carousel" role="button" data-slide="next">
			  <span className="carousel-control-next-icon" aria-hidden="true"></span>
			  <span className="sr-only">Next</span>
  		</a>
  		{props.children}
		</div>
	);
}

const LandingCard = (props) => {
	/*
	 * props.size = 1, 2 or 3 col
	 * props.offset = 1, 2 cols
	 * props.title
	 * props.content
	 */

	let col = "col-12";

	switch (props.size) {
		case 2:
			col += " col-md-6";
			if (props.offset == 1) col += " offset-md-6";
			break;
		case 3:
			col += " col-md-4";
			if (props.offset == 1) col += " offset-md-4";
			else if (props.offset == 2) col += " offset-md-8";
			break;
	}

	return (
		<div className={col}>
			<div className="card">
				<div className="card-body">
					<h5 className="card-title">{props.title}</h5>
					<p className="card-text">{props.content}</p>
				</div>
			</div>
		</div>
	);
}

class Landing extends React.Component {
	constructor() {
		super();
	}

	componentDidMount() {
	}

	render() {
		return (
			<div>
    		<Navbar bg={false} />
				<div className="container-fluid p-0">
					<LandingCarousel>
						<div id="landing-search" className="container-fluid">
							<strong><h2>Browse Our Library...</h2></strong>
							<form action="/listings">
								<div className="row">
									<div className="form-group col-12 col-md-4 col-lg-3 offset-lg-1">
								    <select className="form-control" id="landing-search-select" name="list-type">
								      <option value="offers">I want to buy...</option>
								      <option value="requests">I want to sell...</option>
								    </select>
									</div>
									<div className="form-group col-12 col-md-8 col-lg-7">
										<input type="text" className="form-control" id="landing-search-text" name="query" placeholder="Search textbook..." />
									</div>
									<div className="form-group col-12 col-md-4 offset-md-4">
										<button type="submit" className="btn btn-block btn-danger"><span className="fa fa-search"></span> Search</button>
									</div>
								</div>
							</form>
						</div>
					</LandingCarousel>

					<div id="landing-section-1" className="landing-section">
						<div className="container">
							<div className="row">
								<LandingCard size={1} offset={0} title={"Card 1"} content={"This card takes full space"} />
								<LandingCard size={2} offset={0} title={"Card 2"} content={"This card takes half space and no offset"} />
								<LandingCard size={2} offset={0} title={"Card 3"} content={"This card takes half space and no offset"} />
								<LandingCard size={2} offset={1} title={"Card 4"} content={"This card takes half space and 1 col offset"} />
								<LandingCard size={3} offset={0} title={"Card 5"} content={"This card takes a third space and no offset"} />
								<LandingCard size={3} offset={0} title={"Card 6"} content={"This card takes a third space and no offset"} />
								<LandingCard size={3} offset={0} title={"Card 7"} content={"This card takes a third space and no offset"} />
								<LandingCard size={3} offset={1} title={"Card 8"} content={"This card takes a third space and 1 col offset"} />
								<LandingCard size={3} offset={2} title={"Card 9"} content={"This card takes a third space and 2 col offset"} />
							</div>
						</div>
					</div>
					<div class="copyright">
			  <center> <p>© 2018 Textbook Heroes. All rights reserved </p></center>
		     </div>
					<div id="landing-section-2" className="landing-section">
						<div className="container">
							<div className="row">

							</div>
						</div>
					</div>
				</div>
			</div>

		);
	}
}

export default Landing;