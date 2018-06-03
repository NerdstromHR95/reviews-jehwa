const mongoose = require('mongoose');
const Promise = require('bluebird');

mongoose.connect('mongodb://localhost/reviews');
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

const getReviews = () => (
  Review.findAsync({itemNo: 1})
);


module.exports = {
  Review,
  getReviews,
};
