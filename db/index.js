const mongoose = require('mongoose');
const Promise = require('bluebird');
const data = require('../mockData.js');

mongoose.connect(process.env.mongoURL || 'mongodb://localhost/reviews');

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
