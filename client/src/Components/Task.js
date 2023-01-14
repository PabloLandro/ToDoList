import React from 'react'
import Col from 'react-bootstrap/Col';

const Task = ({ task }) => {

  return (
    <Col style={{ backgroundColor: task.color }}>
      {task.title}
    </Col>
  )
    
}

export default Task