const mongoose = require('mongoose');



const feeSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },
    phonenumber: {
        type: String,
        required: true,
    },
    payment: {
        type: String,
        required: true,

    },
    additionalpayment: {
        type: String,
        required: true,

    },
    paymentdate: {
        type: Date,

    },
    duedate: {
        type: Date,

    },
    status: {
        type: String,
        default: 'Paid',


    }





})

const feeModel = mongoose.model('fee', feeSchema);
module.exports = feeModel;