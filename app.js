const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const urlmdb =
    "mongodb+srv://sports:HmGVtPkfasZRsUzF@cluster0.36fai.mongodb.net/sport?retryWrites=true&w=majority";

mongoose.connect(urlmdb, (err, res) => {
    if (err) throw err;
    console.log("Base de datos ONLINE");
});

const app = express();
app.use(cors());
app.use(express.json());
app.use(require("./router/user.router"));
app.use(require("./router/deporte.router"));
app.use(require("./router/event.router"));
app.use(require("./router/booking.router"));

app.listen(3000, () => {
    console.log("Escuchando puerto: ", 3000);
});