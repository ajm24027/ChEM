const router = require('express').Router()
const controller = require('../controllers/GhostController')
const middleware = require('../middleware')

router.get('/', controller.GetGhosts)
router.post('/', controller.CreateGhost)
router.put('/:ghost_id', controller.UpdateGhost)

module.exports = router
