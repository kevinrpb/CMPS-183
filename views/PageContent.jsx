import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './components/Landing_Page/Landing.jsx';
import Navbar from './components/Navbar/Nav.jsx';

class PageContent extends React.Component {
    render() {
        return (
            <div>
            		<Navbar />
                <LandingPage />
            </div>
        );
    }
}

if (typeof window !== 'undefined') {
    ReactDOM.render(     
        <PageContent />,
        document.getElementById('root')        
    );
}

export default PageContent;