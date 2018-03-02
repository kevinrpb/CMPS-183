const firebase = require('firebase');
const dummy = require('./dummydata.json');
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

	pushDummy: function() {

		for (let key in dummy) {
			for (let key2 in dummy[key]) {
				this.db.ref('/' + key + '/').child(key2).set(dummy[key][key2]);
			}
		}

		// for (let key in dummy.users) {
		// 	this.db.ref('/users/').child(key).set(dummy.users[key]);
		// }
		
		// for (let key in dummy.requests) {
		// 	this.db.ref('/requests/').child(key).set(dummy.requests[key]);
		// }
		
		// for (let key in dummy.offers) {
		// 	this.db.ref('/offers/').child(key).set(dummy.offers[key]);
		// }

	},

	queryListings: function(type, query) {
		let database = this.db;
		return new Promise(function(resolve, reject) {
			database.ref('/' + type + '/').once('value')
				.then(function(snapshot) {
					let items = [];

					snapshot.forEach(function(childSnapshot) {
						let key = childSnapshot.key;
						let data = childSnapshot.val();
						data.key = key;
						items.push(data)
					});

					resolve(items);
				})
				.catch(function(err) {
					reject(err);
				});
		});
	}
};
