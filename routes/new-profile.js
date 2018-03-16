let db = require('../Firebase');

module.exports = {
	get: function(req, res) {
		res.render('Index', {
	  	title: 'TBH - New Profile',
	  	page: 'new-profile'
	  });
	},
	post: function(req, res) {
		let type = req.body.type,
				list = {
					age: req.body.age,
					major: req.body.major,
					bio: req.body.bio
				},
				user = req.body.email == '' ? null : req.body.email;

		list.email = user ? user.replace(',', '.') : "";

		db.updateProfile(type, list, user)
			.catch(function(err) {
				console.error(err);
				res.send(err);
			});
	}
 }


