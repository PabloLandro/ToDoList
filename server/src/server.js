const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const cors = require('cors')

const Task = require('./models/task')

const app = express()
app.use(cors())

dotenv.config()
dotenv.config({ path: '.env.local', override: true });
mongoose.set('strictQuery', false)

app.get('/api/tasks/get', async (req, res) => {
  try {
    const result = await Task.find()
    res.json(result)
  } catch (e) {
    res.status(100).json(e.message)
  }
})

app.get('/api/tasks/add', async (req, res) => {
  const task = new Task({
    title: req.title,
    description: req.description
  })
  try {
    task.save()
    res.json(task)
  } catch (e) {
    res.status(200).json(e.message)
  }
})

const PORT = process.env.PORT
const CONN = process.env.CONN


const start = async () => {
  try {
    await mongoose.connect(CONN)
    app.listen(PORT, () => {
      console.log('Server is online in port ' + PORT)
    })
  } catch (e) {
    console.log(e.message)
  }

}

start()