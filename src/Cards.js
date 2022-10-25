import React from 'react'
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

const Cards = (props) => {
  return (
    /*<div>
        <h1>{props.maker}</h1>
        <h1>{props.model}</h1>
        <h1>{props.year}</h1>
    </div> */

    <Col >
    <Card style={{ width: '18rem' }} className="mb-5">
      <Card.Img variant="top" src={props.image} height="200px" />
      <Card.Body>
        <Card.Title>{props.maker} {props.model}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={`/cars/${props.id}`}> <button>Read more</button></Link>
      </Card.Body>
    </Card>

    </Col>
              
               
  )
}

export default Cards