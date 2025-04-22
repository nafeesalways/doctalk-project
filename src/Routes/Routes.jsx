import React, { Children } from 'react';
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router"
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Bookings from '../pages/Bookings/Bookings';
import DoctorDetails from '../pages/DoctorDetails/DoctorDetails';
import Blogs from '../pages/Blogs/Blogs';
import Contact from '../pages/Contact/Contact';

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
    },
    {
      path: '/Bookings',
      Component: Bookings,
    },
    {
      path: '/Blogs',
     Component:Blogs,
    },
    {
      path: '/Contact',
     Component:Contact,
    },
    {
      path: '/doctorDetails/:id',
      loader:()=>fetch('./doctorsData.json'),
      Component: DoctorDetails,
    }
   ]
    },
    
  ]);
 