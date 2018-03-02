import React from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './components/Landing_Page/Landing.jsx';
import ProfilePage from './components/Profile_Page/Profile.jsx';
import ListingPage from './components/Listing_Page/Listing.jsx';


const PageContent = (props) => {

	switch (props.page) {
		case 'profile':
			return(<ProfilePage data={props.data} />);
			break;

		case 'listing':
			return(<ListingPage data={props.data} />)
			break;
		// case 'search':
		// 	break;
		
		// case 'account':
		// 	break;

		default:
			// console.log("Rendering Home");
			return ( <LandingPage data={props.data} /> );
			break;
	}
}

export default PageContent;