/* eslint-disable no-unused-vars */
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../component/home'
import Navbar from '../component/Navbar'
import About from '../component/about'

function RouTeR2() {
    const router=createBrowserRouter([
        {
            path:'/',
            Component :Navbar,
            children:[
                {
                  path:'',
                  Component:Home  
                },
                {
                    path:'about',
                    Component:About,
                    loader:About.loader
                }
            ]
        }
    ])
  return (
    <div>
      <RouterProvider router={router}  />
    </div>
  )
}

export default RouTeR2
