const mongoose = require('mongoose')
const ghostSchema = require('./Ghost')
const userSchema = require('./User')
const sessionSchema = require('./Session')
const interactionSchema = require('./Interaction')

const User = mongoose.model('User', userSchema)
const Ghost = mongoose.model('Ghost', ghostSchema)
const Session = mongoose.model('Session', sessionSchema)
const Interaction = mongoose.model('Interaction', interactionSchema)

module.exports = {
  User,
  Ghost,
  Session,
  Interaction
}
