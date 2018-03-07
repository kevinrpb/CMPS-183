var express = require('express');
var morgan = require('morgan');
var { createEngine } = require('express-react-views');

const app = express();
const port = 8000;

require.extensions['.css'] = function() {
    return; // doing nothing since it's a css
};

/* gzipping to save space */
// app.get('*.js', function(req, res, next) {
//   req.url = req.url + '.gz';
//   res.set('Content-Encoding', 'gzip');
//   res.set('Content-Type', 'text/javascript');
//   next();
// });

/* view engine configure */
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.use(express.static('public'));
app.use(morgan('dev'));
app.engine('jsx', createEngine());

app.get('/dummy', function(req, res) {
	require('./Firebase').pushDummy();
	res.redirect('/listing');
});
/* routes */
app.get('/', require('./routes/index'));   				// landing page
app.get('/profile', require('./routes/profile'));   //  profile page
app.get('/listing', require('./routes/listing-result'));  //listing page
app.get('/listing/:type/:id', require('./routes/listing-detail'));  //listing page
app.get('/new', require('./routes/new-listing'));   //  new page

app.listen(
    port,
    function(){
        console.log("\uD83C\uDF0F running at http://localhost:8000");
    }
);