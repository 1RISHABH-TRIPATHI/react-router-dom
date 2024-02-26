/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useBeforeUnload } from 'react-router-dom';

function UseBeforeLoaD() {
    const [student,setStudent]=useState({
        fname:'',
        lname:'',
        email:''

    });
    useBeforeUnload(()=>{
        localStorage.setItem('Student Data',JSON.stringify(student))
    });
  return (
    <div>
            <h2>
                Wel Come to Student Form 
            </h2>
            <div>
                <form action="">
                    First Name : <input type="text" name="fname" id="" placeholder='Enter First Name' value={student.fname} onChange={(e)=>{
                        setStudent({...student,[e.target.name]: e.target.value})
                    }} /> <br /> 
                    Last Name : <input type="text" name="lname" id="" placeholder='Enter last Name ' value={student.lname} onChange={(e)=>{
                            setStudent({...student,[e.target.name]:e.target.value})
                    }} /> <br />
                    User Email : <input type="email" name="email" id="" placeholder='Enter Email'value={student.email} onChange={(e)=>{
                        setStudent({...student,[e.target.name]:e.target.value})
                    }} /> <br />

                </form>
                <div>
                    <h2>
                        BeforeLOadData
                    </h2>
                    <p>
                        
                    </p>
                </div>
            </div>
    </div>
  )
}

export default UseBeforeLoaD
