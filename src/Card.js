import React from 'react'

const Card = (props) => {
  return (
    <div>
        <h1>{props.maker}</h1>
        <h1>{props.model}</h1>
        <h1>{props.year}</h1>
        <h2>----------------------------------------------------------------------</h2>
    </div>
  )
}

export default Card