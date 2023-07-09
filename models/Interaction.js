const { Schema } = require('mongoose')

const interactionSchema = new Schema(
  {
    session: { type: Schema.Types.ObjectId, ref: 'Session', required: true },
    input: { type: String },
    response: { type: String }
  },
  { timestamps: true }
)

module.exports = interactionSchema
