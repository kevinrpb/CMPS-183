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
		
	}
}


