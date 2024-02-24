/* eslint-disable no-unused-vars */
import React from 'react'
import { useLoaderData } from 'react-router-dom';

function About() {
    const data=useLoaderData();
    console.log(data);
  return (
    <div>
      <h2>
        Wel come to About Pages 
      </h2>
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

