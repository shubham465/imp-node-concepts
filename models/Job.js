const mongoose = require('mongoose')

const Skills_ENUM = [
  'Javascript',
  'React',
  'Typescript'
]

const jobSchema = mongoose.Schema({
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  title: String,
  description: String,
  salary: Number,
  skills: {
    type: [String],
    enum: Skills_ENUM
  },
  createdAt: {type: Date, default: Date.now()}
})

module.exports = mongoose.model("Job", jobSchema);