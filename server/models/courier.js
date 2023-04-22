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
    RecievedAt: {
        type: Date,
        default: new Date().toISOString().split('T'),
    },
});

const courierMessage = mongoose.model("courierMessage", courier);

module.exports = courierMessage;