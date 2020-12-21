const express = require("express");
const {
    listEvent,
    createEvent,
    updateEvent,
    deleteEvent,
} = require("../controller/event.controller");
const { verificaToken } = require("../middleware/auth");

const app = express();

app.post("/event", [verificaToken], createEvent);

app.get("/event", verificaToken, listEvent);

app.put("/event", verificaToken, updateEvent);

app.delete("/event", verificaToken, deleteEvent);

module.exports = app;