const express = require('express');
const path = require('path');
const db = require('../db/index.js');

const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '/../public')));

app.get('/init', (data) => {
  db.getReviews()
    .then(data => console.log(data));
});

app.listen(3002, () => console.log('server is listening on port 3002'));

