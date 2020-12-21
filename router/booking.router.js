const express = require("express");
const {
    listBooking,
    createBooking,
    deleteBooking,
} = require("../controller/booking.controller");
const { verificaToken } = require("../middleware/auth");

const app = express();

app.post("/booking", [verificaToken], createBooking);

app.get("/booking", verificaToken, listBooking);

app.delete("/booking", verificaToken, deleteBooking);

module.exports = app;