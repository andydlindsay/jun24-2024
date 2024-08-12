const express = require('express');
const morgan = require('morgan');
// const cors = require('cors');

const movieReviewData = require('./data/movie-reviews');

const app = express();
const port = 54321;

app.use(morgan('dev'));
// app.use(cors()); // enable any other origin to make requests to this server

// GET /movie-reviews
app.get('/movie-reviews', (req, res) => {
  res.json(movieReviewData);
});

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});
