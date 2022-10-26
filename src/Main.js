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
    function PaginatedItems({ itemsPerPage }) {
        // We start with an empty list of items.
        const [currentItems, setCurrentItems] = useState(null);
        const [pageCount, setPageCount] = useState(0);
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);
      
        useEffect(() => {
          // Fetch items from another resources.
          const endOffset = itemOffset + itemsPerPage;
          console.log(`Loading items from ${itemOffset} to ${endOffset}`);
          setCurrentItems(items.slice(itemOffset, endOffset));
          setPageCount(Math.ceil(items.length / itemsPerPage));
        }, [itemOffset, itemsPerPage]);
      
        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
          const newOffset = (event.selected * itemsPerPage) % items.length;
          console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
          );
          setItemOffset(newOffset);
        };
      
        return (
          <>
            <Items currentItems={currentItems} />
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              onPageChange={handlePageClick}
              pageRangeDisplayed={5}
              pageCount={pageCount}
              previousLabel="< previous"
              renderOnZeroPageCount={null}
            />
          </>
        );
      }

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