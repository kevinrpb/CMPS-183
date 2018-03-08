/*
 * GET home page.
 */

module.exports = function(req, res) {
	res.render('Index', {
  	title: 'TBH - About',
  	page: 'about'
  });
}