/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function ShowGrid({rating,description,price,image,category,title}) {
  
  return (
    <>
     <div  style={{border:'2px solid black',borderRadius:'20px', width:'26rem',margin:'20px'}}> 
        <h3>
          {title}
        </h3>
        <img src={image} alt="" width={300} height={400}/>
          <h2>
            {category}
          </h2>
        <h4>
         price- {price} : rating: {rating.rate}
        </h4>
        <p style={{color:'gray',fontFamily:'monospace'}} >
          {description}
        </p>
     </div>
    </>
  )
}

export default ShowGrid
