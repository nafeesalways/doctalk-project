import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { toast } from 'react-toastify';
import { getStoredAppointment } from '../../utilities/storage';


const Bookings = () => {
    const [appointments, setAppointments] = useState([]);

    useEffect(() => {
      const storedAppointments = getStoredAppointment();
      setAppointments(storedAppointments);
    }, []);
  
    const cancelAppointment = (id) => {
      const updated = appointments.filter(doc => doc.id !== id);
      setAppointments(updated);
      localStorage.setItem('storedBook', JSON.stringify(updated));
      toast.info("Appointment cancelled.");
    };
  
    if (appointments.length === 0) {
      return (
        <div className='mt-10'>
          <h1 className='text-3xl font-bold'>You have not booked any appointment yet</h1>
          <p className='text-gray-400 mt-8 mb-8'>
            Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
          </p>
          <Link to='/'><button className="btn btn-primary">Book an Appointment</button></Link>
        </div>
      );
    }
    return (
        <div className='mt-10'>
          <h1 className='text-3xl font-bold mb-4'>Your Booked Appointments</h1>
          {appointments.map(doc => (
            <div key={doc.id} className="border p-4 mb-3 rounded-lg shadow">
              <h2 className="text-xl font-semibold">{doc.name}</h2>
              <p>{doc.speciality}</p>
              <button onClick={() => cancelAppointment(doc.id)} className="btn btn-error mt-2">Cancel</button>
            </div>
          ))}
        </div>
      );
    };
  
;

export default Bookings;