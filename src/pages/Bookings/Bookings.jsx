import React, { useEffect, useState } from "react";
import { Link } from "react-router";
import { toast } from "react-toastify";
import { getStoredAppointment } from "../../utilities/storage";

import Chart from "./Chart";

const Bookings = () => {
  const [appointments, setAppointments] = useState([]);


 useEffect(() => {
  const storedAppointments = getStoredAppointment();
  setAppointments(storedAppointments);
}, []);
  const cancelAppointment = (id) => {
    const updated = appointments.filter((doc) => doc.id !== id);
    setAppointments(updated);

    
  
    localStorage.setItem("storedBook", JSON.stringify(updated));
    toast.info("Appointment cancelled.");

  };
 
console.log(appointments)
  if (appointments.length === 0) {
    
    return (
      <div className="mt-10">
        
        <h1 className="text-3xl font-bold">
          You have not booked any appointment yet
        </h1>
        <p className="text-gray-400 mt-8 mb-8">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
        <Link to="/">
          <button className="btn btn-primary">Book an Appointment</button>
        </Link>
      </div> 
    );
  }
  return (
    <div className="mt-10">
      <h1 className="text-3xl font-bold mb-4">Your Booked Appointments</h1>
      <Chart data={appointments}></Chart>
      {appointments.map((doc) => (
        <div key={doc.id} className="border p-4 mb-3 rounded-lg shadow">
          <div className="flex justify-between">
            <div>
            <h2 className="text-2xl font-bold">{doc.name}</h2>
            <p className="text-xl text-gray-500"><span>{doc.speciality} {doc.education}</span></p>
            </div>
            <div className="text-gray-600 text-xl">Appointment Fee: {doc.fee}</div>
          </div>
          <button
            onClick={() => cancelAppointment(doc.id)}
            className="btn btn-error mt-2 w-full rounded-lg"
          >
            Cancel Appointment
          </button>
        </div>
      ))}
    </div>
  );
};

export default Bookings;
