const express = require("express");
const {
    createDeporte,
    deleteDeporte,
    listDeporte,
    updateDeporte,
} = require("../controller/deporte.controller");
const { deporteRules } = require("../middleware/field-validator");
const { verificaToken } = require("../middleware/auth");

const app = express();

app.post("/deporte", [verificaToken, deporteRules], createDeporte);

app.get("/deporte", verificaToken, listDeporte);

app.put("/deporte", verificaToken, updateDeporte);

app.delete("/deporte", verificaToken, deleteDeporte);

module.exports = app;