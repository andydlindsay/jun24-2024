const express = require('express');

const app = express();
const port = 8080;

// configuration
app.set('view engine', 'ejs');

// middleware
app.use(express.urlencoded({ extended: true })); // creates and populates req.body

// data
const microorganisms = {
  abc: {
    id: 'abc',
    name: 'bacteria',
    species: 'animal',
    sizeInNm: 15,
    numCells: 1,
    survivorTemp: 89,
  },
  def: {
    id: 'def',
    name: 'virus',
    species: 'humans',
    sizeInNm: 5,
    numCells: 1000,
    survivorTemp: 92,
  },
};

// Read - GET /microorganisms
app.get('/microorganisms', (req, res) => {
  const templateVars = {
    microorganisms: microorganisms,
    message: 'hello world',
  };

  res.render('microorganisms', templateVars);
});

// Create
app.get('/microorganisms/new', (req, res) => {
  res.render('new-form');
});

app.post('/microorganisms', (req, res) => {
  // console.log(req.body);

  const newMicroorg = {
    name: req.body.name,
    species: req.body.species,
    sizeInNm: Number(req.body.sizeInNm),
    numCells: Number(req.body.numCells),
    survivorTemp: Number(req.body.survivorTemp),
  };

  const id = Math.random().toString(36).substring(2, 5);

  newMicroorg.id = id;

  microorganisms[id] = newMicroorg;

  // console.log(microorganisms);

  // what do we do now???
  res.redirect('/microorganisms');
});

// Update
app.get('/microorganisms/:id/edit', (req, res) => {
  const microorgId = req.params.id; // 'abc'

  const templateVars = {
    microorganism: microorganisms[microorgId]
  };

  res.render('edit-form', templateVars);
});

app.post('/microorganisms/:id/edit', (req, res) => {
  const microorgId = req.params.id;

  const newMicroorg = {
    id: microorgId,
    name: req.body.name,
    species: req.body.species,
    sizeInNm: Number(req.body.sizeInNm),
    numCells: Number(req.body.numCells),
    survivorTemp: Number(req.body.survivorTemp),
  };

  microorganisms[microorgId] = newMicroorg;

  res.redirect('/microorganisms');
});

// Delete
app.post('/microorganisms/:id/delete', (req, res) => {
  const microorgId = req.params.id;

  delete microorganisms[microorgId];

  res.redirect('/microorganisms');
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
