/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function ShowMNI({ name,Festival,Deity,Affilation,description,status,imgUrl,OthorUrl,address}) {
    const {district,state,county} =address;
  return (
    <>
        <div>
            <h2>
              {name}
            </h2> 
            <img src={imgUrl} alt={name} width={300} height={400} />
            <h3>
                {district} : {state}- {county} <br />
                {Deity}
            </h3>
            {Affilation}
            <div>
                <p>
                    {description}
                </p>
            </div>
        </div> 
    </>
  )
}

export default ShowMNI
