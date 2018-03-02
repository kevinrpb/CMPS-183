const firebase = require('firebase');

const config = {
    apiKey: "AIzaSyAeT14vGBBOcIhcu0F33-yVXGPw746XK4M",
    authDomain: "textbookheroes-2df75.firebaseapp.com",
    databaseURL: "https://textbookheroes-2df75.firebaseio.com",
    projectId: "textbookheroes-2df75",
    storageBucket: "textbookheroes-2df75.appspot.com",
};

let fb;

if (!firebase.apps.length) {
  fb = firebase.initializeApp(config);
} else {
	fb = firebase.apps[0];
}

module.exports = {
	app: fb,
	db: fb.database(),
	queryListings: function() {
		return new Promise(function(resolve, reject) {
			resolve([]);
		});
	}
};
