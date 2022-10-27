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
import Pagination from './Pagination.js';
import SearchBar from './SearchBar.js';



const url= "https://example-data.draftbit.com/cars?_limit=50"

const Main = () => {
    const [car, setCar] = useState([])
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(()=>{
        axios.get(url).then((response)=>{
            setCar(response.data)
            console.log(response.data)
        })
    }, [])

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = car.slice(indexOfFirstPost, indexOfLastPost);
  
    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <Container>
        <Row>
            <SearchBar/>
            <Cards car={currentPosts}/>
            <Pagination
               postsPerPage={postsPerPage}
               totalPosts={car.length}
               paginate={paginate}
      />
        </Row>
        </Container>
  )
}

export default Main