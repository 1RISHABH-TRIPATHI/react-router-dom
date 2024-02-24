/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoaderData } from 'react-router-dom';
import ShowGrid from './showGrid';

function About() {
    const data=useLoaderData();
  return (
    <div style={{display:'flex' ,margin:'30px',flexWrap:'wrap',justifyContent:'space-evenly'}}>
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
About.loader =async ()=>{
    const respone=await fetch('https://fakestoreapi.com/products');
    if(!respone.ok)
         throw new Error('Fount fetch Api ');
    else
    {
      
        return respone.json();
    }

}
export default About

