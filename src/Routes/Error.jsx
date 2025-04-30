import React from 'react';
import Navbar from '../components/Header/Navbar';
import errorImg from '../../src/assets/404_page-not-found.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div>
            <Navbar></Navbar>
            <img className='shadow-lg mx-auto w-[700px] h-[500px] mt-5' src={errorImg} alt="" />
            <h1 className='text-xl font-semibold text-orange-500 mt-4'>Oops!!!The Page you are looking for doesn't exist.</h1>
           <Link to='/'> <button className='btn btn-primary mt-4'>Go Back Home</button></Link>
        </div>
    );
};

export default Error;