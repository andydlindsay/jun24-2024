require('dotenv').config();

const express = require('express');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('dev'));

// require the routers
const productRouter = require('./routes/product-router');
const blogpostRouter = require('./routes/blogpost-router');

// use the routers as middleware
// /blogposts
// /api/admin/blogposts
app.use('/api/admin/blogposts', blogpostRouter);
app.use('/products', productRouter);

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
