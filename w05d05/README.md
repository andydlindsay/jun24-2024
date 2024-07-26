# W05D05 - Mid-term Project Kickoff

### Purpose of Midterms
* reinforce all of your current knowledge
* how to work as a team

### Pick a Project

### User Stories
* describes how a user can interact with our app
* As a ______, I can ______, because _______

As a logged in user, I can see a list of available maps, because I'm interested in things in my area

As a logged in user, I can add points to a map, because I want to share areas of interest
As a non logged in user, I cannot edit points on a map, because they don't belong to me

/planning/user-stories.md
/planning/user-stories-stretch.md

### Nouns === Resources/Tables
* each noun becomes a table
* ERD
* 3-5 tables

/planning/erd.png
/planning/erd-stretch.png

### Routes
* remember RESTful routing
* naming convention for routes

GET /all-the-users
POST /create-a-brand-new-user

resources are plural: users, maps, pins
actions are singular: login, logout, register

Browse  GET   /food-items
Read    GET   /food-items/:id
Edit    POST  /food-items/:id
Add     POST  /food-items
Delete  POST  /food-items/:id/delete

/planning/routes.md

### MVP
* Minimum Viable Plan/Product
* @KV Minimum Viable Demo (MVD)
* what is the minimum set of features that we can demo in 5 mins??
* if you're not going to show it, don't build it

### Wireframe/Mockup
* structure out the front end page(s)
* lowest fidelity possible (figma)
* steal their designs

/planning/wire-frame.png

### User Login/Registration
* don't do it
* start with a seeded users table

```js
// http://localhost:3000/login/3
app.get('/login/:id', (req, res) => {
  // encrypted cookies
  req.session.userId = req.params.id;

  // plaintext cookies
  res.cookie('userId', req.params.id);

  // send the user somewhere
  res.redirect('/');
});
```

### Tech Choices
* Back End: Node, Postgres, Express
* Front End: HTML, CSS, JS, jQuery, bootstrap, tailwind


1. Create a SCSS file inside of `/styles` (layout.scss)
2. Add a Link tag to your HTML asking for the CSS version of the SCSS file (layout.css)
3. Custom middleware will compile /styles/layout.scss => /public/styles/layout.css
4. Express static middleware serves up the CSS file

### Dividing up the work
* vertical => one dev working on a slice of the full stack (FE, BE, and DB)
* horizontal => each dev working on a separate layer of the stack (FE, BE, or DB)
* pair programming

### Communication
* please do it














