import React from 'react';
import ReactDOM from 'react-dom';
import * as firebase from 'firebase';
import LandingPage from './components/Landing_Page/Landing.jsx';

class PageContent extends React.Component {
    render() {
        return (
            <LandingPage />
        );
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

if (typeof window !== 'undefined') {
    ReactDOM.render(     
        <PageContent />,
        document.getElementById('root')        
    );
}

export default PageContent;