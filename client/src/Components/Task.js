import React from 'react'
import Col from 'react-bootstrap/Col';
import '../styles/tasks.css'


const Task = ({ task }) => {

  return (
    <Col sm={4} className='task' style={{ backgroundColor: task.color }}>
      {task.title}
    </Col>
  )
    
}

export default Task