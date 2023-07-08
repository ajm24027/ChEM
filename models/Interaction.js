const { Schema } = require('mongoose')

const interactionSchema = new Schema(
  {
    session: { type: Schema.Types.ObjectId, ref: 'Session', required: true },
    dialogue: []
  },
  { timestamps: true }
)

module.exports = interactionSchema
