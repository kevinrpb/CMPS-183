import React from 'react';
import ReactDOM from 'react-dom';

import LandingPage from './components/Landing_Page/Landing.jsx';
import ProfilePage from './components/Profile_Page/Profile.jsx';
import ListingResultPage from './components/ListingResult_Page/ListingResult.jsx';
import ListingDetailPage from './components/ListingDetail_Page/ListingDetail.jsx';


const PageContent = (props) => {

	switch (props.page) {
		case 'profile':
			return(<ProfilePage data={props.data} />);
			break;

		case 'listing-result':
			return(<ListingResultPage data={props.data} />)
			break;

		case 'listing-detail':
			return(<ListingDetailPage data={props.data} />)
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