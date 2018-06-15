const mongoose = require('mongoose');
const data = require('./mockData.js');
const db = require('./db/index.js');

// const Review = mongoose.model('Review', reviewSchema);

db.Review.insertMany(data, (err) => {
  if (err) {
    console.log(err, 'error during building mock data');
  }
  mongoose.connection.close();
});
