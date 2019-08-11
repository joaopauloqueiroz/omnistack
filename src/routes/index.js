const expres = require('express')
const routes = expres.Router()
const DevController = require('../controllers/DevController')

routes.post('/devs', DevController.store)

module.exports = routes