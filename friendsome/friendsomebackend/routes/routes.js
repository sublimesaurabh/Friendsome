const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/SignUpModels')

router.post('/signup', (request, response) => {
    const signedUpUser = new signUpTemplateCopy({
        fullname: request.body.fullname,
        major: request.body.major,
        email: request.body.email,
    })
    signedUpUser.save()
        .then(data => {
            response.json(data)
        })
        .catch(error => {
            response.json(error)
        })
})


module.exports = router