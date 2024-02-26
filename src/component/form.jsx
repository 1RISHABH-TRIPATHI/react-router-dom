/* eslint-disable no-unused-vars */
import React from 'react'

function Form() {
   
    const onSubmithandle=(event)=>
    {
        event.preventDefault();
    } 
  return (
    <div>
      <form action="">
        <span>Name</span> <input type="text" name="useName"  /> <br />
       <span>Email</span> <input type="email" name="email" /> <br />
       <span>Password</span> <input type="password" /><br /> <br />
       <button type="submit"onClick={(e)=>onSubmithandle(e)} >Submit</button>
      </form>
    </div>
  )
}

export default Form
