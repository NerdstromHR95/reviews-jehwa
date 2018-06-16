const mongoose = require('mongoose');
const Promise = require('bluebird');
const data = require('../mockData.js');
const config = require('../config');
// mongoose.connect('mongodb://localhost/reviews');

mongoose.connect(`mongodb+srv://${config.id}:${config.password}@nerdstrom-sxh1b.mongodb.net/test?retryWrites=true`);

Promise.promisifyAll(require('mongoose'));

const reviewSchema = mongoose.Schema({
  id: { type: Number, unique: true },
  itemNo: Number,
  date: Date,
  nickname: String,
  title: String,
  description: String,
  stars: Number,
  fitRating: Number,
  widthRating: Number,
});

const Review = mongoose.model('Review', reviewSchema);

Review.count((err, count) => {
  if (err) {
    console.log(err, 'error during counting mock data');
  }
  if (!count) {
    Review.insertMany(data, (err) => {
      if (err) {
        console.log(err, 'error during building mock data');
      }
    });
  }
});

const getReviews = itemNo => Review.findAsync({ itemNo });

const filterByStar = (itemNo, starNo, sortedByTime) => {

  if (sortedByTime === 'true') {
    return Review.find({ itemNo, stars: starNo }).sort('-date');
  }
  return Review.findAsync({ itemNo, stars: starNo });
};


module.exports = {
  Review,
  getReviews,
  filterByStar,
};
