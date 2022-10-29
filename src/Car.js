import React,  { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'

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
        <p>{singleCar.description}</p>
        <Link to={`/`} >Go back</Link>
    </div>
  )
}

export default Car