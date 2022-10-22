import React from 'react'
import { Row, Col, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Cards = (props) => {
  return (
    /*<div>
        <h1>{props.maker}</h1>
        <h1>{props.model}</h1>
        <h1>{props.year}</h1>
    </div> */

    <Col >
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={props.image} height="200px" />
      <Card.Body>
        <Card.Title>{props.maker} {props.model}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    </Col>

  )
}

export default Cards