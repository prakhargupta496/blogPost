// jshint esversion:6

// module imports
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// routes imports
const composeRoute = require('./routes/composeRoute');
const homeRoute = require('./routes/homeRoute');
const miscRoute = require('./routes/miscRoute');
const postsRoute = require('./routes/postsRoute');

const app = express();

app.set('view engine', 'ejs');

// middlewares
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// route middlewares

app.use(composeRoute);
app.use(homeRoute);
app.use(miscRoute);
app.use(postsRoute);

mongoose.connect('mongodb://localhost:27017/blogDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log('Server started on port 3000');
});
