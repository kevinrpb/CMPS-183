/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('Index', {
  	title: 'TBH - Home',
  	page: 'home'
  });
};