import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { BsSearch } from 'react-icons/bs';
import { Container } from 'react-bootstrap';


const SearchBar = ({car}) => {
    const [search, setSearch] = useState("")
  return (
     <Container>
        {/*<input type="text" onChange={(e) => setSearch(e.target.value)}/> */}
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
      })}
    </Container>
  )
}

export default SearchBar