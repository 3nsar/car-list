import React,  { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
const Car = () => {
    const {id} = useParams()
    const url = `https://example-data.draftbit.com/cars/${id}`
    const[singleCar, setSingleCar] = useState([])

    useEffect(()=>{
      const fetchPosts = async () =>{
      const res = await axios.get(url);
          setSingleCar(res.data)
          console.log(res.data)
      }
      fetchPosts()
  }, [])
    

  return (
    <div className='car-container'>
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={singleCar.image} height="200px" />
        <p>{singleCar.description}</p>
      </Card>
      <Link to={`/`} className="back-btn">Go back</Link>
    </div>
  )
}

export default Car