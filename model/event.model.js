const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const eventSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    comuna: {
        type: String,
        required: true,
    },
    region: {
        type: String,
        required: true,
    },
    direccion_encuentro: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    deporte: {
        type: Schema.Types.ObjectId,
        ref: "Deporte",
    },
    active: {
        type: Boolean,
        default: true,
    },
    creator: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
});

module.exports = mongoose.model("Event", eventSchema);