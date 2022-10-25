import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Cards from './Cards.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';
import Row from  'react-bootstrap/Row'
import Col from  'react-bootstrap/Col'
import { Container } from 'react-bootstrap';
import { Link } from "react-router-dom";



const url= "https://example-data.draftbit.com/cars?_limit=50"

const Main = () => {

    const [car, setCar] = useState([])
    const [search, setSearch] = useState("")

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setCar(response.data)
            console.log(response.data)
        })
    }, [])
  return (
    <Container>
        {/*<input type="text" onChange={(e) => setSearch(e.target.value)}/> */}
        <InputGroup size="lg" className="mb-3 mt-3 w-75"  onChange={(e) => setSearch(e.target.value)}>
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2" >
          <BsSearch />
        </Button>
      </InputGroup>
    
    
      <Row >
     
        {car.filter((item)=>{
            return search.toLowerCase() === "" ? item : item.make_id.toLowerCase().includes(search)
        }).map((item)=>(

            <Cards 
            maker= {item.make_id}
            model = {item.model}
            year = {item.year}
            image = {item.image}
            info = {item.description}
            id = {item.id}
            />

        ))}
      
    </Row> 
    </Container>
  )
}

export default Main