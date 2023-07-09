const { Session, Ghost, Interaction } = require('../models')

const GetSessions = async (req, res) => {
  try {
    const sessions = await Session.find({})
    res.send(sessions)
  } catch (error) {
    throw error
  }
}

const ShowSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.session_id)
    const interactions = await Interaction.findById({
      session: req.params.session_id
    })
    res.send({ session, interactions })
  } catch (error) {
    throw error
  }
}

const CreateSession = async (req, res) => {
  try {
    const date = new Date().toLocaleString().slice(0, 8)
    const ghost = await Ghost.findById(req.params.ghost_id)

    const newSession = new Session({
      name: `${ghost.name}-${date}`,
      owner: '64a8bd55c23afd37429d093d',
      ghost: req.params.ghost_id
    })

    ghost.sessions.push(newSession._id)

    await newSession.save()
    await ghost.save()
    res.send(newSession)
  } catch (error) {
    throw error
  }
}

const DeleteSession = async (req, res) => {
  try {
    await Interaction.deleteMany({ session: req.params.session_id })
    await Session.deleteOne({ _id: req.params.session_id })
    res.send({
      msg: 'Session Deleted',
      payload: req.params.session_id,
      status: 'Ok'
    })
  } catch (error) {
    throw error
  }
}

const UpdateSession = async (req, res) => {
  try {
    const session = await Session.findByIdAndUpdate(
      req.params.session_id,
      req.body,
      { new: true }
    )
    res.send(session)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetSessions,
  ShowSession,
  CreateSession,
  DeleteSession,
  UpdateSession
}
