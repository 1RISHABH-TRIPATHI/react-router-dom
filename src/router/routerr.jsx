/* eslint-disable no-unused-vars */
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../component/home'
import About from '../component/about'
import Navbar from '../component/Navbar'

function Routers() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
        <Route path='/' Component={Navbar} >
                <Route path='' Component={Home} />
                <Route path='about' Component={About} />
        </Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routers
