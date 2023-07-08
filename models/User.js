const { Schema } = require('mongoose')

const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true },
    passwordDigest: { type: String, required: true },
    sessions: [{ type: Schema.Types.ObjectId, ref: 'Session' }]
  },
  { timestamps: true }
)

module.exports = userSchema
