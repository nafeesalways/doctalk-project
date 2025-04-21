import React from 'react';

const Doctor = ({singleDoctor}) => {
    const {image,name,education,experience,speciality,registrationNumber} = singleDoctor;
    return (
        <div className="card bg-base-100 w-96 shadow-sm border p-6">
        <figure className="px-10 pt-10">
          <img
            src={image}
            alt="Doctors"
            className="rounded-xl w-full p-4 bg-gray-100 mx-auto" />
        </figure>
       <div className='flex '>
        <p className='p-3 font-semibold'>Speciality: {speciality}</p>
        <p className='p-3 font-semibold'>Experience: {experience}</p>
       </div>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p className='border-t-2 border-dashed'>{education}</p>
          <p>Reg No: {registrationNumber}</p>
          <div className="card-actions">
            <button className="btn btn-primary">View Details</button>
          </div>
        </div>
      </div>
    );
};

export default Doctor;