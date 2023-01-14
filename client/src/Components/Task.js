import React from 'react'
import Col from 'react-bootstrap/Col';
import '../styles/tasks.css'
import Card from 'react-bootstrap/Card';



const Task = ({ task }) => {

  return (
    <Col sm={4} className='task'>
      <Card>
        <Card.Title>Title</Card.Title>
        <Card.Body>
          <Card.Text>{task.title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
    
}

export default Task