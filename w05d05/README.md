# W05D05 - Mid-term Project Kickoff

### Purpose of Midterms
* reinforce all of your current knowledge
* how to work as a team

### Pick a Project
- Wiki Map
- Quiz App
- Story Creator
- Decision Maker
- PasswordKeepR
- Smart TODO List
- Resource Wall
- Buy/Sell Listing Website
- Schoodle
- Food Pick-up Ordering

### User Stories
- A _user story_ describes how users will interact with your application
- They have the form: As a ______, I want to ______, because ______.
- eg. As a _user_, I want to _be able to save posts_, because _I want to review them later_.
- User stories can also be negated: As a _____, I shouldn't be able to ______, because _____.
- eg. As a _user_, I shouldn't be able to _edit other users posts_, because _I don't own those posts_.

### ERD
- The user stories provide you with nouns (eg. user, posts, favourites)
- Use these nouns/entities to build out your database (ie. tables are the nouns from the stories)

### Routes
- Once you know the resources that you'll have, write out the routes that you'll need to perform BREAD operations on those resources
- Remember RESTful conventions (they make it much easier)

### MVP vs MVD
- There is a concept in development of an MVP, the Minimum Viable Product
- An MVP has just enough features to be useful to a user
- This concept helps streamline the development process and help keep the team on target
- For mid-terms, we want to focus on the MVD, the Minimum Viable Demo
- **If you aren't going to demo it, don't build it**

### Wireframes
- Draw out the structure of your web pages
- This will make it much easier to build out these pages later
- This is also a great opportunity to get input from all of the team members
- Design matters... however you are a developer, not a designer
- Get inspiration from websites you visit

### User Login
- Don't do it
- Seriously, don't do it
- We know that you know how to register and login users

```js
// do this instead
app.get('/login/:id', (req, res) => {
  // using encrypted cookies
  req.session.user_id = req.params.id;

  // or using plain-text cookies
  res.cookie('user_id', req.params.id);

  // send the user somewhere
  res.redirect('/');
});
```

### Tech Choices
- We have made all the tech choices for you
- Back End: Node and Express
- Front End: HTML, CSS, JS, jQuery, Bootstrap

### The Mid-term Skeleton
- Use the provided `node-skeleton` as a template for your project
- This will get you up and running quickly

### Dividing up the work
* Vertical => one dev working on a slice of the full stack (FE, BE, and DB)
* Horizontal => each dev working on a separate layer of the stack (FE, BE, or DB)
* Pair programming

### Communication
- Make sure to communicate with your team members
- Use Discord, iMessage, Google Hangouts, whatever... just make sure that everyone is on the same page
