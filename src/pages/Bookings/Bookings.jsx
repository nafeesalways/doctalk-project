import React from 'react';
import { Link } from 'react-router';

const Bookings = () => {
    return (
       <div className='mt-10'>
        <h1 className='text-3xl font-bold'>You Have not Booked any appointment yet</h1>
        <p className='text-gray-400 mt-8 mb-8'>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
        <Link to='/'><button className="btn btn-primary">Book an Appointment</button></Link>
       </div>
    );
};

export default Bookings;