/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from 'react'
import { useRoutes } from 'react-router-dom'
import Navbar from '../component/Navbar'
import Home from '../component/home'
import Form from '../component/form'
import MNApi from '../component/data_MnApi'
function Router3() {
    const element=useRoutes([
        {
            path:'/',
            element:<Navbar />,
            children:[
                {
                    path:'',
                    element:<Home />
                },
                {
                    path:'form',
                    element:<Form/>,
                },
                {
                    path:'Student',
                    element:<Form/>,
                    
                },
                {
                    path:'mandir',
                    element:<MNApi />
                },
            ],
        },
    ]);
    return element;
}

export default Router3
