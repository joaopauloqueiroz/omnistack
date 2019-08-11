const expres = require('express')
const routes = expres.Router()
const DevController = require('../controllers/DevController')
const LikesController = require('../controllers/LikeController')
const DislikesController = require('../controllers/DislikesController')

routes.post('/devs', DevController.store)
routes.post('/devs/:devId/likes', LikesController.store)
routes.post('/devs/:devId/dislikes', DislikesController.store)

//GET
routes.get('/devs', DevController)
module.exports = routes