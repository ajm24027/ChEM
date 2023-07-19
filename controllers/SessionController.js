const { Session, Ghost, Interaction, User } = require('../models')

const GetUsersSessions = async (req, res) => {
  try {
    const sessions = await Session.find({ owner: req.params.user_id })
    res.send(sessions)
  } catch (error) {
    throw error
  }
}

const ShowUsersSession = async (req, res) => {
  try {
    const session = await Session.findById(req.params.session_id).populate({
      path: 'name owner ghost interactions'
    })
    res.send(session)
  } catch (error) {
    throw error
  }
}

const CreateSession = async (req, res) => {
  try {
    const date = new Date().toLocaleString().slice(0, 8)
    const foundGhost = await Ghost.findById(req.body.ghost._id)
    const foundUser = await User.findById(req.body.user.id)

    const newSession = new Session({
      name: `${foundGhost.name}-${date}`,
      owner: foundUser._id,
      ghost: foundGhost._id
    })

    foundGhost.sessions.push(newSession._id)
    foundUser.sessions.push(newSession._id)

    await newSession.save()
    await foundUser.save()
    await foundGhost.save()
    res.send(newSession)
  } catch (error) {
    throw error
  }
}

const DeleteSession = async (req, res) => {
  try {
    console.log(req.params)
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
    const name = req.body
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
  GetUsersSessions,
  ShowUsersSession,
  CreateSession,
  DeleteSession,
  UpdateSession
}
