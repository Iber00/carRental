const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const carSchema = new Schema({
    name: {type: String, required:true},
    price_per_day: {type: Number, required:true},
    year: {type: Number, required:true},
    color: {type: String, required:true},
    steering_type: {type: String, required:true},
    number_of_seats: {type: Number, required:true},    
});

module.exports = mongoose.model('cars',carSchema);