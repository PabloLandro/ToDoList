import React from 'react'
import '../styles/tasks.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'

import { getTasks } from '../api.js'

import Task from './Task'

const tasks = [
  {
    title: 'Walk the dog',
    color: 'red',
  },
  {
    title: 'Code',
    color: 'yellow',
  },
  {
    title: 'Gym',
    color: 'green',
  },
  {
    title: 'Sleep',
    color: 'orange'
  },
]

const TasksContainer = () => {
  const LENGTH = 3
  const nRows = tasks.length / LENGTH

  const structuredTasks = () => {
    const out = []

    for (let i = 0; i < nRows-1; i++) {
      out.push(tasks.slice(i, i + LENGTH))
    }

    out.push(tasks.slice(tasks.length - tasks.length % LENGTH, tasks.length))
    return out
  }

  getTasks().then((out) => console.log("return:" + out))

  return (
    <Container style={{ display: "block"}}>
      {
        structuredTasks().map((set, index) => {
          return (
            <Row key={index} className='row'>
              {
                set.map((task) => (
                  <Task key={task.title} task={task} />
                ))
              }
            </Row>
          )
        })
      }
    </Container>
  )
}

export default TasksContainer