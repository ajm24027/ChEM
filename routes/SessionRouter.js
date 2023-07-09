const router = require('express').Router()
const controller = require('../controllers/SessionController')
const middleware = require('../middleware')

router.get('/', controller.GetSessions)
router.get('/:session_id', controller.ShowSession)
router.post('/:ghost_id', controller.CreateSession)
router.put('/:session_id', controller.UpdateSession)
router.delete('/:session_id', controller.DeleteSession)

module.exports = router
