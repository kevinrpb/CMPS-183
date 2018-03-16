/*
 * GET home page.
 */

module.exports = function(req, res) {
	res.render('Index', {
  	title: 'TBH - Contact',
  	page: 'contact'
  });
}