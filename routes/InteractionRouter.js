const router = require('express').Router()
const controller = require('../controllers/InteractionController')
const middleware = require('../middleware')

router.get('/:session_id', controller.GetInteractions)
router.post('/:session_id', controller.CreateInteraction)

module.exports = router
