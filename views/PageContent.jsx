import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import LandingPage from './components/Landing_Page/Landing.jsx';
import ProfilePage from './components/Profile_Page/Profile.jsx';

class PageContent extends React.Component {

	render() {
		switch (this.props.page) {
			case 'profile':
				return(<ProfilePage />);
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

if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: "AIzaSyC_VcsH5WT0RryJaje9-1nvy2M1IsoGt2I",
		authDomain: "textbookheroes-6b61a.firebaseapp.com",
		databaseURL: "https://textbookheroes-6b61a.firebaseio.com",
		projectId: "textbookheroes-6b61a",
		storageBucket: "textbookheroes-6b61a.appspot.com",
	});
}

export default PageContent;