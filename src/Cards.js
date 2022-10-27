import React, { useEffect, useState } from 'react'

import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



const Cards = ({car}) => {

  return (
    /*<div>
        <h1>{props.maker}</h1>
        <h1>{props.model}</h1>
        <h1>{props.year}</h1>
    </div> */

    <Col >
    {car.map((item)=>(
    <Card  style={{ width: '18rem' }} className="mb-5" key={item.id} >
      <Card.Img variant="top" src={item.image} height="200px" />
      <Card.Body>
        <Card.Title>{item.make_id} {item.model}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Link to={`/cars/${item.id}`}> <Button>Read more</Button></Link>
      </Card.Body>
    </Card>
        ))}
    </Col>
               
  )
}

export default Cards