let db = require('../Firebase');

/*
 * GET profile page.
 */

module.exports = function(req, res) {
	let type = req.query.type || 'offers';
	let query = req.query.query;

	db.queryProfile(type, query)
		.then(function(data) {
			// console.log(data);
			res.render('Index', {
		  	title: 'testing if this works',
		  	page: 'profile',
		  	data: {
		  		name: name,
		  		email: email,
		  	}
		  });
		})
		.catch(function(err) {
			console.error(err);
			res.send(err);
		});
}
