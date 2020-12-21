const express = require("express");
const {
    createUser,
    listUsers,
    updateUser,
    deleteUser,
    loginUser,
} = require("../controller/user.controller");
const { userRules } = require("../middleware/field-validator");
const { verificaToken } = require("../middleware/auth");

const app = express();

app.post("/usuario", [userRules], createUser);

app.get("/usuarios", verificaToken, listUsers);

app.put("/usuario", verificaToken, updateUser);

app.delete("/usuario", verificaToken, deleteUser);

app.post("/login", loginUser);

module.exports = app;