/* eslint-disable no-unused-vars */
import React from "react";
import Home from "./home";
import { Link, Outlet, useOutlet } from "react-router-dom";

function Navbar() {
	return (
		<div>
			<h1>Jay Shree Ram</h1>
                <Link to='/'  > Home Page </Link> <br />
                <Link to='about'  > About Page </Link> <br />
                <Link to='form'  > From Page </Link>
                {useOutlet()}
		</div>
	);
}

export default Navbar;
