import React from 'react'
import Col from 'react-bootstrap/Col';
import '../styles/tasks.css'
import Card from 'react-bootstrap/Card';



const Task = ({ task }) => {

  return (
    <Col sm={4} className='task'>
      <Card style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'flex-start' }}>
        <Card.Body>
          <Card.Title style={{textAlign: 'start'}}>Title</Card.Title>
          <Card.Text>{task.title}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  )
    
}

export default Task