const mongoose = require('mongoose');


const expenseSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true,

    },
    expense: {

        type: String,


    },
    date: {
        type: Date,


    }




})

const expenseModel = mongoose.model('expense', expenseSchema);
module.exports = expenseModel;