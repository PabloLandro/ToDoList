mongoose = require('mongoose')

taskSchema = new mongoose.Schema({
  title: String,
  description: String,
})

module.exports = mongoose.model('Task', taskSchema)