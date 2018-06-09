const express = require('express');
const path = require('path');
const db = require('../db/index.js');

const app = express();

app.use(express.json());

app.use('/:itemNo', express.static(path.join(__dirname, '/../public')));

app.get('/:itemNo/init', (req, res) => {
  const itemNo = req.url.split('/')[1];
  db.getReviews(itemNo)
    .then(data => res.send(data));
});

app.listen(3002, () => console.log('server is listening on port 3002'));

