let db = require('../Firebase');

/*
 * GET home page.
 */

module.exports = {
	get: function(req, res) {
		res.render('Index', {
	  	title: 'TBH - New',
	  	page: 'new-listing'
	  });
	},
	post: function(req, res) {
		let type = req.body.type,
				list = {
					title: req.body.title,
					author: req.body.author
				},
				user = req.body.email == '' ? null : req.body.email;

		list.isbn = req.body.isbn ? req.body.isbn : "";
		list.edition = req.body.edition ? req.body.edition : "";
		list.course = req.body.course ? req.body.course : "";
		list.tags = req.body.tags ? req.body.tags.split(',') : [];
		list.email = user ? user.replace(',', '.') : "";

		db.addListing(type, list, user)
			.then(function(key) {
				res.redirect('/listing/' + type + '/' + key);
			})
			.catch(function(err) {
				console.error(err);
				res.send(err);
			});
	}
}


