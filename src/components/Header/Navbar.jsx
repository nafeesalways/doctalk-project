import React from 'react';
import logo from '../../assets/Frame 1.png'
import {  NavLink } from 'react-router';
import './Navbar.css'

const Navbar = () => {
    const Links = <>
   <NavLink className={({isActive})=>isActive? 'border-b-2': ''}  to='/'> <li className='font-bold mr-4 cursor-pointer '>Home</li></NavLink>
   <NavLink className={({isActive})=>isActive? 'border-b-2': ''}  to='/Bookings'> <li className='font-bold mr-4 cursor-pointer'>Bookings</li></NavLink>
   <NavLink className={({isActive})=>isActive? 'border-b-2': ''}  to='/Blogs'> <li className='font-bold mr-4 cursor-pointer'>Blog</li></NavLink>
   <NavLink className={({isActive})=>isActive? 'border-b-2': ''}  to='/Contact'> <li className='font-bold mr-4 cursor-pointer'>Contact us</li></NavLink>
   
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
         {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><img src={logo} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
        {Links}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary rounded-lg">Emergency</a>
        </div>
      </div>
    );
};

export default Navbar;