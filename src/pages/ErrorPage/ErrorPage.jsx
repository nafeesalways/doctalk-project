import React from 'react';
import Navbar from '../../components/Header/Navbar';


import { Link, useParams } from 'react-router';

const ErrorPage = () => {
  const {id} = useParams();

   
    return (
      <div>
       
        <div className="shadow-lg py-6 text-center">
          <h1 className="text-3xl font-bold mt-8 text-red-500">No Doctor Found</h1>
          <p className="text-gray-400 mt-5">No Doctor Found with this registration Number: <span className="font-semibold">{id}</span></p>
          <Link to="/">
            <button className="btn btn-primary mt-5 mb-14">View All Doctors</button>
          </Link>
        </div>
       
      </div>
    );
  
  

};

export default ErrorPage;