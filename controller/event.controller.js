const Event = require("../model/event.model");

const listEvent = async(request, response) => {
    await Event.find({ active: true })
        .populate("deporte", "name img")
        .populate("creator", "name email")
        .then((u) => {
            response.status(200).json(u);
        });
};

const createEvent = async(request, response) => {
    const ev = request.body;

    let event = new Event(ev);
    event.creator = request.user._id;

    try {
        await event.save();
    } catch (err) {
        if (err.name === "MongoError" && err.code === 11000) {
            return response.status(422).send({
                succes: false,
                message: "Event already exist!",
            });
        } else {
            console.log(err);
        }
    }

    response.json({
        succes: true,
        message: "Evento created successfully",
    });
};

const updateEvent = async(request, response) => {
    const ev = request.body;
    const {
        _id,
        title,
        description,
        comuna,
        region,
        direccion_encuentro,
        date,
        deporte,
    } = request.body;

    console.log("eventttt");
    console.log(ev.title);

    try {
        await Event.updateOne({ _id }, {
            _id,
            title,
            description,
            comuna,
            region,
            direccion_encuentro,
            date,
            deporte,
        });
    } catch (err) {
        console.log(err);
        return response.status(422).send({
            succes: false,
            message: "Cannot update!",
        });
    }
    response.json({
        succes: true,
        message: "Event updated successfully",
    });
};

const deleteEvent = async(request, response) => {
    const { _id } = request.body;

    try {
        await Event.updateOne({ _id }, { active: false });
    } catch (err) {
        return response.status(422).send({
            succes: false,
            message: "Cannot delete!",
        });
    }
    response.json({
        succes: true,
        message: "Event deleted successfully",
    });
};

module.exports = {
    listEvent,
    createEvent,
    updateEvent,
    deleteEvent,
};