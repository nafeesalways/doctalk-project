import React from 'react';
import {
    createBrowserRouter,
    
  } from "react-router"
import Root from '../pages/Root/Root';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Home from '../pages/Home/Home';
import Bookings from '../pages/Bookings/Bookings';
import DoctorDetails from '../pages/DoctorDetails/DoctorDetails';
import Blogs from '../pages/Blogs/Blogs';
import Contact from '../pages/Contact/Contact';
import Loader from '../components/Loader/Loader';

 export const router = createBrowserRouter([
    {
      path: "/",
    Component: Root,
   errorElement: <ErrorPage></ErrorPage>,
   children:[
    {
        index:true,
        loader:()=>fetch('doctorsData.json'),
        hydrateFallbackElement: <p className='loading loading-bars loading-md'>Loading, Please Wait....</p>,
        path:'/',
        Component:Home,
    },
    {
      path: '/Bookings',
      loader:()=>fetch('doctorsData.json'),
      hydrateFallbackElement: <p className='loading loading-bars loading-md'>Loading, Please Wait....</p>,
      Component: Bookings,
    },
    {
      path: '/Blogs',
      loader:()=>fetch('/blogs.json'),
      hydrateFallbackElement: <Loader></Loader>,
     Component:Blogs,
    },
    {
      path: '/Contact',
      loader:()=>fetch('doctorsData.json'),
      hydrateFallbackElement: <p className='loading loading-bars loading-md'>Loading, Please Wait....</p>,
     Component:Contact,
    },
    {
      path: '/doctorDetails/:id',
      loader:()=>fetch('./doctorsData.json'),
      Component: DoctorDetails,
    },

   ]
    },
    
  ]);
 