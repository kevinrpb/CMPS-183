# CMPS 183 - Textbook Heroes

Use modern Node/React/Express frameworks to create a website that allows students to list no-longer-needed textbooks for sale and connect potential buyers with them.

## Instructions to run development

If you haven't already: `npm instal`
1. `npm run dev`
2. ~~`npm run build`~~ (replaced to support SCSS)
2. `npm start`
3. Go to [localhost:8000](http://localhost:8000)
4. pm2 logs to see live logging for debugging

Alternative without pm2:
1. `npm run start:dev`
2. Go to [localhost:8000](http://localhost:8000)


## Add new routes
You'll have to edit 3 files.
1. Create new route file in _./routes_ (similar to index.js). Note you have to call render 'Index', and pass a parameter of the page you want to render:
```
module.exports = function(req, res) {
	res.render('Index', {
  	title: 'TBH - Home',
  	page: 'pageName'
  });
}
```
2. Add route to app in _./app.js_:
```
app.get('/', require('./routes/routeFile'));
```
3. Add rendering view in _./views/PageContent.jsx_. There's a switch statement that will select what component to render based on the parameter passed in the first point.
```
switch (this.props.page) {
	...

	case 'pageName':
		return(
			<PageComponent />
		);
		break;

	...

	default:
		return ( 
			<LandingPage />
		);
		break;
}
```
4. Import the page to PageContent.jsx.
```
import namePage from './components/name_Page/name.jsx';
```

## Work with DB example
I think it's good to add a small tutorial/explanation so we can follow some common ideas while using the DB.

First, we have a Firebase.js file in our root directory. This is the place where we'll work to access the DB and we'll use it from our _routes_ in the server.

For example, for the listings:
- In _routes/listing.js_ we require it with `let db = require('../Firebase');`.
- Then, in the route handler we call the function __queryListings__. 
	- This function takes a _type_ and a _query_. This is, it receives whether we're looking for offers or requests (type) and what we're looking for (text query). 
	- The function return a JS promise (review documentation on what's a promise, it's very useful and it's a proper way of doing this).
		- With this promise we can handle the return of data from _Firebase.js_ and possible errors.
- Once we have the data returned, we render the page as usual, but passing in a __data__ object that contains whatever extra things we need in that page. In the case of listings we need the items returned by the DB controller, the query and the type of search.
- In the template (.jsx) file for our page we receive this extra info in _props.data_ object. Then we proceed for each page (in the listings we use it to populate the grid and to set the values of the search form).
- There's a proto funciton in _Firebase.js_ to show how to structure DB accesses. The __queryListings__ function is there also commented showing what's going on.


## Documents
[Release Plan 1](https://docs.google.com/document/d/1UQ19d5sdkth_8BzuwrX1pVepqWDvTsUHg0RQOk4Y-LI/edit?usp=sharing)

[Sprint 1](https://github.com/Platem/CMPS-183/blob/master/docs/Sprint_1)

[Sprint 2](https://github.com/Platem/CMPS-183/blob/master/docs/Sprint_2)

[Sprint 3](https://github.com/Platem/CMPS-183/blob/master/docs/Sprint_3)

[Sprint 4](https://github.com/Platem/CMPS-183/blob/master/docs/Sprint_4)


## Scrum Board
[Scrum](https://trello.com/textbookheroes)


## Team Members
>Ron Marks - PO - Developer

>Kevin Romero Peces-Barba - Developer - Scrum Master (Sprint 3)

>Katerina Chinnappan - Developer - Scrum Master (Sprint 1, Sprint 2)

>Bryan Uribe - Developer - Scrum Master (Sprint 4)
