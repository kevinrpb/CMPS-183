import React from 'react';

class Layout extends React.Component {
    render() {
        return (
            <html>
            <head>
                <title>Ron Marks</title>
                <link rel="stylesheet" href="styles.css" />
            </head>
            <body> 
                <div id="root">
                </div>
                <script type="text/javascript" src="./bundle.js"></script>
            </body>
            </html>
        );
    }
}

export default Layout;