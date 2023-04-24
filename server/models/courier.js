const mongoose = require("mongoose");

const courier = mongoose.Schema({
    student_name: {
        type: String,
        required: true,
        minlength: 3
    },
    couriedID: {
        type: String,
        required: true,
        minlength: 3
    },
    room:{
        type: String,
        required: true,
        minlength: 3
    },
    RecievedAt: {
        type: String,
        default: new Date().toISOString().substring(0,10),
    },
});

const courierMessage = mongoose.model("courierMessage", courier);

module.exports = courierMessage;