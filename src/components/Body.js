import React, { useEffect } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Browse from './Browse'
import Login from './Login'
import { auth } from '../utilis/firebase'
import { useDispatch } from 'react-redux'
import { addUser, removeUser } from '../utilis/userSlice'
import { onAuthStateChanged } from 'firebase/auth'

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([

        {
            path:"/",
            element:<Login/>,
        },

        {
            path:"/browse",
            element:<Browse/>,
        }
    ]);
    
    
  return (
    <div>
        
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body