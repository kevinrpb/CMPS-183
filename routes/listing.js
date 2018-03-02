let db = require('../Firebase');

/*
 * GET profile page.
 */

module.exports = function(req, res) {
	db.queryListings()
		.then(function(data) {
			res.render('Index', {
		  	title: 'TBH - Listing',
		  	page: 'listing',
		  	data: data
		  });
		})
		.catch(function(err) {
			res.send(err);
		});
}