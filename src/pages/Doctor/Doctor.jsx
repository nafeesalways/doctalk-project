import React from 'react';
import { RiRegisteredLine } from "react-icons/ri";
import { Link } from 'react-router';

const Doctor = ({singleDoctor}) => {
    const {image,name,id,education,experience,speciality,registrationNumber} = singleDoctor;
    if(!singleDoctor){
      return 'error'
      
    }
    return (
        <div className="card bg-base-100 w-96 shadow-sm border p-6">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Doctors"
            />
        </figure>
       <div className='flex '>
        <p className='p-3 font-semibold'>Speciality: {speciality}</p>
        <p className='p-3 font-semibold'>Experience: {experience}</p>
       </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
         
          <p className='border-t-2 border-dashed'>{education}</p>
          <RiRegisteredLine />
         <p>Reg No: {registrationNumber}</p>
          <div className="card-actions">
           <Link to={`/doctorDetails/${id}`}> <button className="btn btn-primary">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Doctor;