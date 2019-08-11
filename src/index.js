const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const routes = require('./routes')
const port = 3333;

mongoose.connect('mongodb+srv://joao:200*technology@cluster0-gn4bg.mongodb.net/test?retryWrites=true&w=majority', {
    useNewUrlParser: true
})
app.use(cors())
app.use(routes)
app.listen(port, () => {
    console.log(`Server is runing in ${port}`)
})