import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const url= "https://example-data.draftbit.com/cars?_limit=20"

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
    <div>
        {/*<input type="text" onChange={(e) => setSearch(e.target.value)}/> */}
        <InputGroup className="mb-3">
        <Form.Control
          placeholder="Recipient's username"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
        />
        <Button variant="outline-secondary" id="button-addon2">
          Button
        </Button>
      </InputGroup>
        {car.filter((item)=>{
            return search.toLowerCase() ==="" ? item : item.make_id.toLowerCase().includes(search)
        }).map((item)=>(
            <Card 
            maker= {item.make_id}
            model = {item.model}
            year = {item.year}
            />
        ))}

    </div>
  )
}

export default Main