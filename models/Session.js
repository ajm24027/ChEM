const { Schema } = require('mongoose')

const sessionSchema = new Schema(
  {
    name: { type: String, required: true },
    owner: { type: Schema.Types.ObjectId, ref: 'User' },
    ghost: { type: Schema.Types.ObjectId, ref: 'Ghost' },
    interactions: [{ type: Schema.Types.ObjectId, ref: 'Interaction' }]
  },
  { timestamps: true }
)

module.exports = sessionSchema
