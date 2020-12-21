const Booking = require("../model/booking.model");

const listBooking = async(request, response) => {
    await Booking.find({ active: true, user: { _id: request.user._id } })
        .populate(
            "event",
            "title description comuna region direccion_encuentro date deporte"
        )
        .populate("user", "name email")
        .then((u) => {
            response.status(200).json(u);
        });
};

const createBooking = async(request, response) => {
    const ev = request.body;

    let booking = new Booking(ev);
    booking.user = request.user._id;

    try {
        await booking.save();
    } catch (err) {
        if (err.name === "MongoError" && err.code === 11000) {
            return response.status(422).send({
                succes: false,
                message: "Booking already exist!",
            });
        } else {
            console.log(err);
        }
    }

    response.json({
        succes: true,
        message: "Booking created successfully",
    });
};
const deleteBooking = async(request, response) => {
    const { _id } = request.body;

    try {
        await Booking.updateOne({ _id }, { active: false });
    } catch (err) {
        return response.status(422).send({
            succes: false,
            message: "Cannot delete!",
        });
    }
    response.json({
        succes: true,
        message: "Booking deleted successfully",
    });
};

module.exports = {
    listBooking,
    createBooking,
    deleteBooking,
};