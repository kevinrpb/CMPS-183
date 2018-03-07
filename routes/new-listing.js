/*
 * GET home page.
 */

module.exports = function(req, res) {
	res.render('Index', {
  	title: 'TBH - New',
  	page: 'new-listing'
  });
}