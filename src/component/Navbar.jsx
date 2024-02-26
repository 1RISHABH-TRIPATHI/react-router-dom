/* eslint-disable no-unused-vars */
import React from "react";
import axios from 'axios'
import { Link, useOutlet,Await } from "react-router-dom";

function Navbar() {
	return (
		< >
          <h2>
               JASGHDFUF DSFGUJHI RVSGSJBHIO 
          </h2>
               <div style={{display:'flex',justifyContent:'space-evenly'}}>
               <Link to='/'  > Home Page </Link> <br />
                <Link to='form'  > From Page </Link> <br />
                <Link to='mandir'  > Mndir Page </Link> <br />
                <Link to='Student'  > Student Page </Link> <br />
               </div>
               {useOutlet()}
		</>

	);
}

export default Navbar;
