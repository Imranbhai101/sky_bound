const db = require('../models')
const CatchAsync = require('../../middleware/CatchAsync')
const User = db.user
const Queries = db.queries

const Register = CatchAsync(() => {

})

module.exports = {
    Register
}