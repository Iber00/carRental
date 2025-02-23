const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    full_name: {type: String, required:true},
    email: {type: String, required:true,unique:true},
    username: {type: String, required:true},
    password: {type: String, required:true,minlength: 6}
});

module.exports = mongoose.model('user',userSchema);