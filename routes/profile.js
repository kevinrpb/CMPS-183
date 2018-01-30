/*
 * GET profile page.
 */

exports.index = function(req, res){
  res.render('Index', {
  	title: 'TBH - Profile',
  	page: 'profile'
  });
};
