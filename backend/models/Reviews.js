const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    productId: {type: mongoose.Types.ObjectId, ref: "Cities"},
    username: {type: String, required: true},
    reviewText: {type: String, required: true},
    rating: {type: Number, required: true, min: 0, max: 5, default: 0}
},
{timestamps: true});

const reviewModel = new mongoose.model("Reviews", reviewSchema);

module.exports = reviewModel;