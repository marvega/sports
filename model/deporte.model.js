const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const deporteSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
    },
    img: {
        type: String,
        required: true,
    },
    active: {
        type: Boolean,
        default: true,
    },
});

module.exports = mongoose.model("Deporte", deporteSchema);