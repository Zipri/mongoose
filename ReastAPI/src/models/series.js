const mongoose = require('mongoose');

const seriesSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: [true, "this ID is already exist"]
    },
    title: {
        type: String,
        required: true,
        unique: [true, "this title is already exist"]
    },
    premiere: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 100
    },
    trailer: {
        type: String,
        required: true
    },
    cover: {
        type: String,
        required: true
    },
});

const series = new mongoose.model('series', seriesSchema);
module.exports = series;