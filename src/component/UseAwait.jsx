/* eslint-disable no-unused-vars */
import React from 'react'
import { useAsyncValue } from 'react-router-dom'

function UseAwait() {
    const respone=useAsyncValue();
   console.log(respone);
  return (
    <div>
      Users Data 
    </div>
  )
}

export default UseAwait
