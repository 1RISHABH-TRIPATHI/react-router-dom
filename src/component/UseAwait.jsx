/* eslint-disable no-unused-vars */
import React from 'react'
import { useAsyncValue } from 'react-router-dom'
import ShowGrid from "./showGrid";
function UseAwait() {
    const respone=useAsyncValue();
   const value= respone.data;
  return (
    <div>
       <ShowGrid 
            key={value.id}
            title={value.title}
            category={value.category}
            image={value.image}
            price={value.price}
            description={value.description}
            rating={value.rating}

           />
    </div>
  )
}

export default UseAwait
