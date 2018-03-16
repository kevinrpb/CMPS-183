let db = require('../Firebase');

module.exports = {
	get: function(req, res) {
		res.render('Index', {
	  	title: 'TBH - New Profile',
	  	page: 'new-profile'
	  });
	},
	post: function(req, res) {
		console.log(req.body);
		let new_data = {
			age: req.body.age,
			major: req.body.major,
			bio: req.body.bio
		},
		user = req.body.email == '' ? null : req.body.email;
		user = user.replace(/\./g, ',');

		db.updateProfile(user, new_data)
			.then(function() {
				res.redirect('/profile/users/' + user);
			})
			.catch(function(err) {
				console.error(err);
				res.send(err);
			});
	}
 }


