const express = require('express')
const app = express()
const routes = require('./routes')
const port = 3333;

app.use(routes)

app.listen(port, () => {
    console.log(`Server is runing in ${port}`)
})