const express = require('express')

const App = express()
const port = 8080
const cors = require('cors')
const bodyparser = require('body-parser')
const FormRoute = require("./Server/Routes/UserQueries/ContactForm")
App.use(cors({
    origin: '*'
}))

App.use(bodyparser.urlencoded({ extended: false }))
App.use(bodyparser.json())

App.use('/form', FormRoute)

App.listen(port, () => {
    console.log(`your are connected with port ${port}`)
})