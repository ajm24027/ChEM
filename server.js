const express = require('express')
const logger = require('morgan')
const cors = require('cors')

require('dotenv').config()

const AuthRouter = require('./routes/AuthRouter')
const GhostRouter = require('./routes/GhostRouter')
const SessionRouter = require('./routes/SessionRouter')
const InteractionRouter = require('./routes/InteractionRouter')

const PORT = process.env.PORT || 3001

const db = require('./db')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/auth', AuthRouter)
app.use('/ghost', GhostRouter)
app.use('/session', SessionRouter)
app.use('/interaction', InteractionRouter)

app.use('/', (req, res) => {
  res.send(`Connected!`)
})

app.listen(PORT, () => {
  console.log(`Running Express server on Port ${PORT} . . .`)
})
