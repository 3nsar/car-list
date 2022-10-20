import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from './Card';

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
        <input type="text" onChange={(e) => setSearch(e.target.value)}/>
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