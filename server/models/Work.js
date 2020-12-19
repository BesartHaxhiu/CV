const mongoose = require('mongoose');

const HomeSchema = mongoose.Schema({
    title:String,
    image:String,
    isDeleted:{type: Boolean, default: false},
    updated_date: { type: Date, default: Date.now },
});
module.exports = mongoose.model('Work', HomeSchema);