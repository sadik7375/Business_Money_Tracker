const mongoose = require('mongoose');

const validator = require('validator');
const signupSchema = new mongoose.Schema({
        name: {
            type: String,
            required: [true, "Please tell us your name!"]
        },
        email: {
            type: String,
            required: [true, "please provide your email"],
            unique: true,
            lowercase: true,
            validate: [validator.isEmail, 'Please provide a  valid email'],



        },
        password: {
            type: String,
            required: [true, "please provide your email"],



        },
        phonenumber: {
            type: String,
            required: true,

        }





    }


)
const userModel = mongoose.model('signup', signupSchema);
module.exports = userModel;