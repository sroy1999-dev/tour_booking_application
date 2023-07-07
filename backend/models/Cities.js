const mongoose = require('mongoose');

const citySchema = new mongoose.Schema({
    title: {type: String, required:true, unique: true},
    city: {type: String, required: true},
    address: {type: String, required: true},
    distance: {type: Number, required: true},
    photo: {type: String, required: true},
    description: {type: String, required: true},
    price: {type:Number, required:true},
    maxGroupSize: {type:Number, required:true},
    reviews: [{type:mongoose.Types.ObjectId, ref:"Reviews"}],
    featured: {type: Boolean, default: false}
},
{timestamps: true});

const cityModel = new mongoose.model("Cities", citySchema);

module.exports = cityModel;