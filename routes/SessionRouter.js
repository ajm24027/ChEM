const router = require('express').Router()
const controller = require('../controllers/SessionController')
const middleware = require('../middleware')

router.get('/:user_id/userSessions', controller.GetUsersSessions)
router.get('/:session_id', controller.ShowUsersSession)
router.post('/create', controller.CreateSession)
router.put('/:session_id', controller.UpdateSession)
router.delete('/:session_id', controller.DeleteSession)

module.exports = router
