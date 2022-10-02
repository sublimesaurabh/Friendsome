const mongoose = require('mongoose')
const signupTemplate = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    major: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },

    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('mytable', signupTemplate)