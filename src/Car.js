import React,  { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom'

const Car = () => {
    const {id} = useParams()
    const url = `https://example-data.draftbit.com/cars/${id}`
    const[singleCar, setSingleCar] = useState([])

    useEffect(() =>{ 
        axios.get(url).then((response) => {
            setSingleCar(response.data)
            console.log((response.data))
        })
    }, []); 
    

  return (
    <div>
        <p>{singleCar.description}</p>
        <Link to={`/`} >Go back</Link>
    </div>
  )
}

export default Car