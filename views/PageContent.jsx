import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import LandingPage from './components/Landing_Page/Landing.jsx';
import ProfilePage from './components/Profile_Page/Profile.jsx';
import ListingPage from './components/Listing_Page/Listing.jsx';
class PageContent extends React.Component {

	render() {
		switch (this.props.page) {
			case 'profile':
				return(<ProfilePage />);
				break;

			case 'listing':
				return(<ListingPage />)
				break;
			// case 'search':
			// 	break;

			// case 'listing':
			// 	break;
			
			// case 'account':
			// 	break;

			default:
				// console.log("Rendering Home");
				return ( <LandingPage /> );
				break;
		}

	}
}

export default PageContent;