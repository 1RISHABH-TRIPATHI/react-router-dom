/* eslint-disable no-unused-vars */
import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from '../component/home'
import Navbar from '../component/Navbar'
import About from '../component/about'
import Form from '../component/form'
import UseAwait from '../component/UseAwait'
import UseBeforeLoaD from '../component/useBeforeUnLoad'
import UseRevaliDator from '../component/UseRevaliDator'
import axios from 'axios'

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
                },
                {
                    path:'form',
                    Component:Form
                },
                {
                    path:'Student',
                    Component:UseRevaliDator,
                    loader:async ()=>{
                        const res=await axios.get('https://fakestoreapi.com/products')
                        return res.data;
                    }
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
