/* eslint-disable no-unused-vars */
import React from 'react'
import { useAsyncError } from 'react-router-dom'

function UseErrorAsynce() {

    const data=useAsyncError();
  return (
    <div>
      <h2>
        Not Found

      </h2>
      <p>
        {data.message}
      </p>
    </div>
  )
}
export default UseErrorAsynce
