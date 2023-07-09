const { Interaction, Session } = require('../models')
const dotenv = require
const { Configuration, OpenAIApi } = require('openai')

const GetInteractions = async (req, res) => {
  try {
    const interactions = await Session.findById(req.params.session_id).populate(
      'interactions'
    )
    res.send(interactions)
  } catch (error) {
    throw error
  }
}

const CreateInteraction = async (req, res) => {
  try {
    const openai = new OpenAIApi(
      new Configuration({
        apiKey: process.env.OAI_API_KEY
      })
    )

    const session = await Session.findById(req.params.session_id).populate(
      'ghost'
    )

    const prompt = `${session.ghost.context} You are ${[
      ...session.ghost.affects
    ].join(', ')}. Please respond to my input: ${req.body.input}`

    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }]
    })

    const newInteraction = new Interaction({
      session: session._id,
      input: req.body.input,
      response: completion.data.choices[0].message.content
    })

    session.interactions.push(newInteraction._id)

    await newInteraction.save()
    await session.save()
    res.send(newInteraction)
  } catch (error) {
    throw error
  }
}

module.exports = {
  GetInteractions,
  CreateInteraction
}
