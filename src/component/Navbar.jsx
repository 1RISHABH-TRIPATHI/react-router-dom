/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./home";
import { Link, useOutlet,Await } from "react-router-dom";

function Navbar() {
	return (
		< >
               <div style={{display:'flex',justifyContent:'space-evenly'}}>
               <Link to='/'  > Home Page </Link> <br />
                <Link to='about'  > About Page </Link> <br />
                <Link to='form'  > From Page </Link> <br />
                <Link to='use'  > USeAwait Page </Link>
               </div>
               <div>
                    <React.Suspense  fallback={<h2>Loading.....</h2>}>
                    <Await  resolve={fetch('https://fakestoreapi.com/products/1')}  > 
                    {useOutlet()}
                    </Await>
                    </React.Suspense>
               </div>
		</>

	);
}

export default Navbar;
