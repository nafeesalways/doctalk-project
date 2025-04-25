import React from 'react';
import Navbar from '../../components/Header/Navbar';
import Footer from '../../components/Footer/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
  
    return (
       
        <div>
            
             <Navbar></Navbar>
          <div className='shadow-lg py-6'>
          <h1 className='text-3xl font-bold mt-8'>No Doctor Found</h1>
           <p className='text-gray-400 mt-5'>No Doctor Found with this registration Number:</p>
           <Link to='/'><button className="btn btn-primary mt-5 mb-14">View All Doctors</button></Link>
          </div>
           <Footer></Footer>
           
        </div>
    );
};

export default ErrorPage;