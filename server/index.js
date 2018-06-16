const express = require('express');
const path = require('path');
const db = require('../db/index.js');

const app = express();

app.use(express.json());

app.use('/:itemNo/reviews', express.static(path.join(__dirname, '/../public')));

app.get('/:itemNo/reviews/init', (req, res) => {
  const itemNo = req.url.split('/')[1];
  db.getReviews(itemNo)
    .then(data => res.send(data));
});

app.get('/:itemNo/reviews/filter/:starNo/:sortedByTime', (req, res) => {
  const urlSplit = req.url.split('/')
  const itemNo = urlSplit[1];
  const starNo = urlSplit[4];
  const sortedByTime = urlSplit[5];
  db.filterByStar(itemNo, starNo, sortedByTime)
    .then(data => res.send(data))
    .catch(err => res.statusCode(500).send(err));
});

// console.log(process.env.PORT);
let port = process.env.PORT || 3002;
app.listen(port, () => console.log(`server is listening on port ${port}`));

