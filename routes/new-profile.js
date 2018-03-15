let db = require('../Firebase');

/*
 * GET home page.
 */

module.exports = {
	get: function(req, res) {
		res.render('Index', {
	  	title: 'TBH - New Profile',
	  	page: 'new-profile'
	  });
	},
	post: function(req, res) {
		let type = "users",
				list = {
					age: req.body.age,
					major: req.body.major
				},
				user = req.body.email == '' ? null : req.body.email;

		list.bio = req.body.bio ? req.body.bio : "";
		list.email = user ? user.replace(',', '.') : "";

		db.addProfile(type, list, user)
			.then(function(key) {
				res.redirect('/profile/' + type + '/' + user);
			})
			.catch(function(err) {
				console.error(err);
				res.send(err);
			});
	}
}


