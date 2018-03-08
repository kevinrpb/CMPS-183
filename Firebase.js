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
	isUserSignedIn: () => {
	    var user = fb.auth.currentUser;
	    if (user) {
	        return true;
	    } else {
	        return false;
	    }
	},
	signIn: () => {
	    var provider = new firebase.auth.GoogleAuthProvider();

	    fb.auth().signInWithRedirect(provider).then(function(result) {
	        console.log("Signed in using Google.");
	    }).catch(function(error) {
	        console.log("Error occured with sign in.");
	    });
	},
	signOut: () => {
		fb.auth().signOut()
	},
	pushDummy: function() {
		this.db.ref().set(null);

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

	protoFunction: function(args) {
		/* This needs to be done cause inside a Promise 'this' does not reference the object */
		// let database = this.db; 

		/* 
		 * This is the proto structure of a promise declaration.
		 *
		 * When we want to return whatever we got from DB we use 'resolve'.
		 * This will call the .then() function.
		 *
		 * If there was any kind of function we'll use 'reject'.
		 * This will call the .catch() function.
		 * A good thing is that firebase itself uses promises, so catching errors is easy (they trigger the catch function too...)
		 *
		 */

		// return new Promise(function(resolve, reject) {
		// 	/* Call the DB to the path we need and using whatever method/args needed */
		// 	database.ref(__path__).__method__(__args__)
		// 		/* The db returned ok, no errors*/
		// 		.then(function(__return__) {
		// 			/* Do stuff with the return if needed and resolve */
		// 			resolve(__return__);
		// 		})
		// 		/* Catch funciton always looks like this. */
		// 		.catch(function(err) {
		// 			reject(err);
		// 		});
		// });
	},

	queryListings: function(type, query) {
		let database = this.db;

		return new Promise(function(resolve, reject) {
			// Access the ref for type of listing (offers/requests)
			database.ref('/' + type + '/').once('value')
				.then(function(snapshot) {
					// We reveive a snapshot (object) and want to transform into Array
					let items = [];

					// Iterate over snapshot items (children)
					snapshot.forEach(function(childSnapshot) {
						// Get the DB key for the item and the object.
						let key = childSnapshot.key;
						let data = childSnapshot.val();
						// Add the key to the object to keep track of it
						data.key = key;

						// We filter the query and the object info to check if we should return it
						if (!query || query == "" || isMatch(data, query))
							// Push the item
							items.push(data)
					});


					// Return the array
					resolve(items);
				})
				.catch(function(err) {
					reject(err);
				});
		});
	},

	getListing: function(type, id) {
		let database = this.db;

		return new Promise(function(resolve, reject) {
			database.ref('/' + type + '/' + id).once('value')
				.then(function(snapshot) {
					let data = snapshot.val();
					data.key = snapshot.key;
					
					resolve(data);
				})
				.catch(function(err) {
					reject(err);
				});
		});
	}
};

const isMatch = (item, query) => {

	if (item && query) {
		// Get different words in query
		let words = query.split(' ');
		// Iterate through the fields in the item
		for (let key in item) {
			// For each word
			for (let word of words) {
				let w = word.toLowerCase();
				let field = ("" + item[key]).toLowerCase();

				// Search word in field or field in word
				let n1 = field.search(w);
				let n2 = w.search(field)
				if (n1 > -1 || n2 > -1) {
					console.log("Match for", key, field, "with word", word);
					console.log(n1, n2);
					return true;
				}
			}
		}
	}

	return false;
}