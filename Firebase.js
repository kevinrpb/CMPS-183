const firebase = require('firebase');

let config = {
    apiKey: "AIzaSyAeT14vGBBOcIhcu0F33-yVXGPw746XK4M",
    authDomain: "textbookheroes-2df75.firebaseapp.com",
    databaseURL: "https://textbookheroes-2df75.firebaseio.com",
    projectId: "textbookheroes-2df75",
    storageBucket: "textbookheroes-2df75.appspot.com",
};

var fb;

if (!firebase.apps.length) {
    fb = firebase.initializeApp(config);
}

module.exports = fb;