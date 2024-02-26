/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import ShowGrid from './showGrid'; 
function UseRevaliDator() {
    const data=useLoaderData();

  return (
    <div style={{padding:'30px'}} >
      <h1>
        Jay Shree Ram 
      </h1>
      {data.map(value=>(
           <ShowGrid 
            key={value.id}
            title={value.title}
            category={value.category}
            image={value.image}
            price={value.price}
            description={value.description}
            rating={value.rating}

           />
    ))}
    </div>
  )
}

export default UseRevaliDator
