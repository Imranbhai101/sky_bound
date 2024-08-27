const express = require('express')
const Router = express.Router()
const ContactForm = require('../../Controllers/FormCtrl')

Router.post('/query', ContactForm.ContactForm)

module.exports = Router