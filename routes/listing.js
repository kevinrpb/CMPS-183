let db = require('../Firebase');

/*
 * GET profile page.
 */

module.exports = function(req, res) {
	// db.pushDummy();
	let type = req.query.type || 'offers';
	let query = req.query.query;

	db.queryListings(type, query)
		.then(function(data) {
			console.log(data);
			res.render('Index', {
		  	title: 'TBH - Listing',
		  	page: 'listing',
		  	data: data
		  });
		})
		.catch(function(err) {
			console.error(err);
			res.send(err);
		});
}