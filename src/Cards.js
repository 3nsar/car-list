import React, { useEffect, useState } from 'react'

import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import Row from  'react-bootstrap/Row'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';
import { Container } from 'react-bootstrap';




const Cards = ({car}) => {
  const [search, setSearch] = useState("")
  return (
    /*<div>
        <h1>{props.maker}</h1>
        <h1>{props.model}</h1>
        <h1>{props.year}</h1>
    </div> */

    <Col>
    <InputGroup size="lg" className="mb-3 mt-3 w-75" onChange={(e) => setSearch(e.target.value)}>
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />

        <Button variant="outline-secondary" id="button-addon2" >
          <BsSearch />
        </Button>
      </InputGroup>

    {car.filter((item)=>{
       return search.toLowerCase() === "" ? item : item.make_id.toLowerCase().includes(search) 
    }).map((item)=>(
    
    <Card  style={{ width: '18rem' }} className="mb-5 bg-info" key={item.id} >
      <Card.Img variant="top" src={item.image} height="200px" />
      <Card.Body>
        <Card.Title>{item.make_id} {item.model}</Card.Title>
        <Card.Text className="text-white">
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