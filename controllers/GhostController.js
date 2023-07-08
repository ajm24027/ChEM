const { Ghost } = require('../models')

const GetGhosts = async (req, res) => {
  try {
    const ghosts = await Ghost.find({})
    res.send(ghosts)
  } catch (error) {
    throw error
  }
}

const CreateGhost = async (req, res) => {
  try {
    const ghost = await Ghost.create({ ...req.body })
    res.send(ghost)
  } catch (error) {
    throw error
  }
}

const UpdateGhost = async (req, res) => {
  try {
    const ghost = await Ghost.findByIdAndUpdate(req.params.ghost_id, req.body, {
      new: true
    })
    res.send(ghost)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetGhosts,
  CreateGhost,
  UpdateGhost
}
