const db = require('../models')
const CatchAsync = require('../../middleware/CatchAsync')

const Queries = db.queries

const ContactForm = CatchAsync(async (req, res) => {
    const { name, email, phone, message } = req.body
    const GetQuery = await Queries.create({
        name, email, phone, message
    })
    res.json(GetQuery)
})

module.exports = {
    ContactForm
}