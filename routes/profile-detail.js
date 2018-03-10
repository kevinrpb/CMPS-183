let db = require('../Firebase');

/*
 * GET profile page.
 */

module.exports = function(req, res) {
	let type = req.params.type;
	let id = req.params.id;

	db.getProfile(type, id)
		.then(function(data) {
			// console.log(data);
			res.render('Index', {
		  	title: 'TBH - profile',
		  	page: 'profile-detail',
		  	data: {
		  		item: data,
		  		type: type
		  	}
		  });
		})
		.catch(function(err) {
			console.error(err);
			res.send(err);
		});
}