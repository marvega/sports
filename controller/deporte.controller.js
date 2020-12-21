const Deporte = require("../model/deporte.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const createDeporte = async(request, response) => {
    const { name, img } = request.body;

    let deporte = new Deporte({ name, img });

    try {
        await deporte.save();
    } catch (err) {
        if (err.name === "MongoError" && err.code === 11000) {
            return response.status(422).send({
                success: false,
                message: "Deporte already exist!",
            });
        }
    }

    response.json({
        success: true,
        message: "Deporte created successfully",
    });
};

const listDeporte = async(request, response) => {
    await Deporte.find({ active: true }, "name img").then((u) => {
        response.status(200).json(u);
    });
};

const updateDeporte = async(request, response) => {
    const { name, img } = request.body;

    try {
        await Deporte.updateOne({ name }, { name, img });
    } catch (err) {
        return response.status(422).send({
            success: false,
            message: "Cannot update!",
        });
    }
    response.json({
        success: true,
        message: "Deporte updated successfully",
    });
};

const deleteDeporte = async(request, response) => {
    const { name } = request.body;

    try {
        await Deporte.updateOne({ name }, { active: false });
    } catch (err) {
        return response.status(422).send({
            success: false,
            message: "Cannot delete!",
        });
    }
    response.json({
        success: true,
        message: "Deporte deleted successfully",
    });
};

module.exports = {
    createDeporte,
    listDeporte,
    updateDeporte,
    deleteDeporte,
};