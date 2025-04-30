import React from 'react';
import { RiRegisteredLine } from "react-icons/ri";
import { Link } from 'react-router';

const Doctor = ({singleDoctor}) => {
    const {image,name,id,education,experience,speciality,registrationNumber} = singleDoctor;
    if(!singleDoctor){
      return 'error'
      
    }
    return (
        <div className="card bg-base-100  shadow-sm border p-6">
        <figure className="px-10 py-10">
          <img
            src={image}
            alt="Doctors"
            />
        </figure>
       <div className='flex'>
        <p className='p-3 font-semibold'>Speciality: <span className='font-semibold'>{speciality}</span></p>
        <p className='p-3 font-semibold'>Experience:<span className='font-semibold'> {experience}</span></p>
       </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
         
          <p className='border-t-2 border-dashed'>
            <span className='font-semibold'>{education}</span>
            </p>
          <RiRegisteredLine />
         <p>Reg No:<span className='font-semibold'>{registrationNumber}</span></p>
          <div className="card-actions">
           <Link to={`/doctorDetails/${id}`}> <button className="btn text-[#176AE5] rounded-lg btn-block">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Doctor;