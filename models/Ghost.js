const { Schema } = require('mongoose')

const ghostSchema = new Schema(
  {
    name: { type: String, required: true },
    affects: [],
    context: { type: String, required: true },
    sessions: [{ type: Schema.Types.ObjectId, ref: 'Session' }]
  },
  { timestamps: true }
)

module.exports = ghostSchema
