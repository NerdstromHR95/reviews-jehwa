const mongoose = require('mongoose');
const data = require('./mockData.js');
mongoose.connect('mongodb://localhost/reviews');

let reviewSchema = mongoose.Schema({
    id: {type: Number, unique: true},
    itemNo: Number,
    nickname: String,
    title: String,
    description: String,
    stars: Number,
    fitRating: Number,
    widthRating: Number    
})

let Review = mongoose.model('Review', reviewSchema);

Review.insertMany(data, (err) => {
    if(err) {
        console.log(err, 'error during building mock data');
    } 
    mongoose.connection.close();
})
