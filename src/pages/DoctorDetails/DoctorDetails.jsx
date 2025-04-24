import React from "react";
import { useLoaderData, useParams } from "react-router";
import { RiRegisteredLine } from "react-icons/ri";
import { addToStoredDb } from "../../utilities/storage";
import { ToastContainer, toast } from 'react-toastify';

const DoctorDetails = () => {
  const { id } = useParams();
  const doctorId = parseInt(id);
  const data = useLoaderData();
  const Doctor = data?.find((doctor) => doctor.id === doctorId);
  const { image, education, name, experience, registrationNumber, speciality,fee } = Doctor || {};

  const handleBookAppointment =(id)=>{
    toast("Appointment scheduled");
addToStoredDb(id)
  }
   

  return (
    <div>
      <h1 className="text-3xl font-bold mb-3 mt-5">Doctor’s Profile Details</h1>
      <p className="text-gray-400 mb-4">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="py-6 font-semibold">{speciality}</p>
            <p className="py-6">{experience}</p>
            <p className="font-bold text-xl">Working at:{education}</p>
     
            <p className="flex items-center justify-center mr-2"><RiRegisteredLine /> Reg No:{registrationNumber}</p>
            <p className="mt-3">Availability:  <span className="px-2 rounded-lg border border-b-blue-300 bg-[#FFA000]">Sunday</span> <span className="px-2 rounded-lg border-b-blue-300 bg-[#FFA000]">Monday</span> <span className="px-2 rounded-lg border-b-blue-300 bg-[#FFA000]">Thursday</span></p>
<p className="mt-4">Consultation Fee: <span className="text-blue-400">Tk: {fee} <span className="text-gray-300">+ included Vat</span></span></p>
          </div>
        </div>
      </div>
      {/* appointment booking */}
      <div className="hero border border-blue-400 rounded-xl mt-5">
  <div className="hero-content text-center">
    <div className="max-w-md">
    <ToastContainer
position="top-right"
autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick={false}
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="light"

/>
      <h1 className="text-5xl font-bold">Book An Appointment</h1>
      <p className="py-4 font-bold">
       Availability
      </p>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button onClick={()=>handleBookAppointment(id)} className="btn btn-primary">Book Appointment Now</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default DoctorDetails;
