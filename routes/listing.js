/*
 * GET profile page.
 */

module.exports = function(req, res) {
	res.render('Index', {
  	title: 'TBH - Listing',
  	page: 'listing'
  });
}