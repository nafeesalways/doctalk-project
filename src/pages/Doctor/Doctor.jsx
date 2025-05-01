import React from 'react';
import { RiRegisteredLine } from "react-icons/ri";
import { Link } from 'react-router';

const Doctor = ({singleDoctor}) => {
    const {image,name,id,education,experience,speciality,registrationNumber} = singleDoctor;
    if(!singleDoctor){
      return 'error'
      
    }
    return (
        <div className="card bg-base-100 w-[410px] h-[560px] p-6 space-x-12 shadow-sm border ">
        <figure className="px-10 py-10">
          <img className=' py-5'
            src={image}
            alt="Doctors"
            />
        </figure>
       <div className='flex space-x-4 mt-5'>
        <p className='px-2 py-2 font-semibold bg-[#09982F] rounded-lg text-white'>Speciality: <span className='font-semibold rounded-lg text-white'>{speciality}</span></p>
        <p className='px-2 font-semibold bg-[#176AE5] rounded-lg text-white mb-2'>Experience:<span className='font-semibold '> {experience}</span></p>
       </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
         
          <p className='border-t-2 border-dashed'>
            <span className='font-semibold'>{education}</span>
            </p>
          <RiRegisteredLine />
         <p>Reg No:<span className='font-semibold'>{registrationNumber}</span>  </p>
          <div className="card-actions">
           <Link to={`/doctorDetails/${id}`}> <button className="btn text-[#176AE5] rounded-lg btn-block">View Details</button></Link>
          </div>
        </div>
      </div>
    );
};

export default Doctor;