const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/reviews');

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

// const getReviews = (cb) => {  
//   cb(Review.find((err, data) => {
//     console.log(data.tree, 'dadta from db');
//   }));
// }
Review.find((err, data) => {
  console.log(data);
})

module.exports = {
  Review,
  // getReviews
}
