import React, { Children } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router"
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';

 export const router = createBrowserRouter([
    {
      path: "/",
    Component: Root,
   errorElement: <ErrorPage></ErrorPage>,
   children:[
    {
        index:true,
        loader:()=>fetch('doctorsData.json'),
        path:'/',
        Component:Home,
    }
   ]
    },
    
  ]);
 