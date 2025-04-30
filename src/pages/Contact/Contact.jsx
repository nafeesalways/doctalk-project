import React from 'react';
import imgError from '../../assets/404_page-not-found.png'
import { Link } from 'react-router';


const Contact = () => {
    return (
        <div>
          <img className='w-[800px] h-[500px] mx-auto shadow-lg mt-8' src={imgError} alt="" />
          <h2 className='text-3xl font-bold text-red-300 mt-4'>404-Page Not Found</h2>
          <p className='text-xl font-semibold mt-3'>Oops! The page you are looking for doesn't exist.</p>
          <Link to='/'><button className="btn btn-primary mt-5">Go Back Home</button></Link>
          
        </div>
    );
};

export default Contact;