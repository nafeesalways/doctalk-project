import React from "react";
import {  NavLink, useLoaderData, useParams } from "react-router";
import { RiRegisteredLine } from "react-icons/ri";
import { addToStoredDb } from "../../utilities/storage";
import { toast } from "react-toastify";

const DoctorDetails = () => {
  const { id } = useParams();
  const doctorId = parseInt(id);
  const data = useLoaderData();
  const doctor = data?.find((doctor) => doctor.id === doctorId);
  const {
    image,
    education,
    name,
    experience,
    registrationNumber,
    speciality,
    fee,
  } = doctor || {};

  const handleBookAppointment = (doctor) => {
    const success = addToStoredDb(doctor);
    console.log(doctor)
    if (success) {
      toast.success(`Appointment Scheduled for ${doctor.name} Successfully`);
    } else {
      toast.error("You already booked this doctor.");
    }
  };
  

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
            <p className="py-4 font-semibold">{experience}</p>
            <p className="font-bold text-xl">Working at:<span className="font-semibold">{education}</span></p>

            <p className="flex items-center justify-center mr-2 mt-6 font-semibold">
              <RiRegisteredLine /> Reg No:<span className="font-semibold">{registrationNumber}</span>
            </p>
            <p className="mt-3 font-semibold">
              Availability:{" "}
              <span className="px-2 rounded-lg border border-b-blue-300 bg-[#FFA000]">
                Sunday
              </span>{" "}
              <span className="px-2 rounded-lg border-b-blue-300 bg-[#FFA000]">
                Monday
              </span>{" "}
              <span className="px-2 rounded-lg border-b-blue-300 bg-[#FFA000]">
                Thursday
              </span>
            </p>
            <p className="mt-4 font-semibold">
              Consultation Fee:{" "}
              <span className="text-blue-400">
                Tk: {fee} <span className="text-gray-300">+ included Vat</span>
              </span>
            </p>
          </div>
        </div>
      </div>
      {/* appointment booking */}
      <div className="hero border border-blue-400 rounded-xl mt-5">
        <div className="hero-content text-center">
          <div className="max-w-lg">
            <h1 className="text-3xl font-bold">Book An Appointment</h1>
           <div className=" justify-between flex items-center mt-4">
           <p className="py-2 font-bold border border-blue-400 rounded-lg px-4">Availability</p>
           <button className="btn px-3 rounded-xl text-white bg-[#09982F]">Doctor Available Today</button>
           </div>
            <p className="mt-6 mb-4 p-3 text-[#FFA000] rounded-lg text-sm border border-[">
            Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
            </p>

          <NavLink to='/bookings'>  <button 
              onClick={() => handleBookAppointment(doctor)}
              className="btn btn-outline btn-primary w-full rounded-lg mt-4"
            >
              Book Appointment Now
            </button></NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
