const express = require('express')
const Router =express.Router()
const Ctrl = require('../../Controllers/Credentials')

Router.post('/register',Ctrl.Register)

module.exports = Router