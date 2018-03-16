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
					author: req.body.author,
					price: req.body.price
				},
				user = req.body.email == '' ? null : req.body.email;

		list.isbn = req.body.isbn ? req.body.isbn.replace(/-/g, '').replace(/ /g, '') : "";
		list.edition = req.body.edition ? req.body.edition : "";
		list.img = req.body.img ? req.body.img : "";
		list.bookDescription = req.body.bookDescription ? req.body.bookDescription : "";
		list.course = req.body.course ? req.body.course : "";
		list.tags = req.body.tags ? req.body.tags.split(',') : [];
		list.email = user ? user.replace(',', '.') : "";

		console.log(list)

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


