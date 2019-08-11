const expres = require('express')
const routes = expres.Router()

routes.get('/', (req, res) => {
    res.send({teste: 'ok'})
})

module.exports = routes