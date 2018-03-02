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

## Documents
[Sprint 1](https://docs.google.com/document/d/12I-Q21wPMOoyTfUW27Hp_W_xazsKs4Od_s6yv6pAQgY/edit?usp=sharing)

[Release Plan 1](https://docs.google.com/document/d/1UQ19d5sdkth_8BzuwrX1pVepqWDvTsUHg0RQOk4Y-LI/edit?usp=sharing)


## Scrum Board
[Sprint 1](https://trello.com/b/IdbzlvJT/textbook-heroes-sprint-1)


## Team Members
>Ron Marks - PO

>Kevin Romero Peces-Barba - Developer

>Katerina Chinnappan - Scrum Master (Sprint 1)

>Bryan Uribe - Developer
