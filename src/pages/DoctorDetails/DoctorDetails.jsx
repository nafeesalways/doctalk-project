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
     <div className="container mx-auto p-4 md:p-8">
      {/* Header Section */}
      <div className="text-center md:text-left mb-8">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          Doctor’s Profile Details
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto md:mx-0">
          Our platform connects you with verified, experienced doctors across
          various specialties — all at your convenience. Whether it's a routine
          checkup or urgent consultation, book appointments in minutes and
          receive quality care you can trust.
        </p>
      </div>

      {/* Main Profile Card */}
      <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8">
        <div className="flex flex-col lg:flex-row items-center lg:items-start w-full">
          {/* Doctor Image */}
          <img
            src={image}
            alt={`Dr. ${name}`}
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full lg:rounded-lg shadow-2xl mb-6 lg:mb-0 lg:mr-8 flex-shrink-0"
          />

          {/* Doctor Details */}
          <div className="text-center lg:text-left flex-grow">
            <h1 className="text-4xl md:text-5xl font-bold">{name}</h1>
            <p className="py-2 text-lg font-semibold text-blue-500">
              {speciality}
            </p>
            <p className="py-1 font-medium text-gray-600">{experience}</p>
            <p className="font-bold text-lg mt-2">
              Working at:{" "}
              <span className="font-semibold text-gray-700">{education}</span>
            </p>

            <p className="flex items-center justify-center lg:justify-start mt-4 font-semibold text-gray-600">
              <RiRegisteredLine className="mr-2" /> Reg No:{" "}
              <span className="font-semibold ml-1">{registrationNumber}</span>
            </p>

            <div className="mt-4">
              <p className="font-semibold">Availability:</p>
              <div className="flex items-center justify-center lg:justify-start gap-2 mt-2">
                <span className="px-3 py-1 text-sm rounded-full bg-[#FFA000] text-white">
                  Sunday
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-[#FFA000] text-white">
                  Monday
                </span>
                <span className="px-3 py-1 text-sm rounded-full bg-[#FFA000] text-white">
                  Thursday
                </span>
              </div>
            </div>

            <p className="mt-4 font-semibold">
              Consultation Fee:
              <span className="text-blue-500 text-xl font-bold ml-2">
                Tk: {fee}{" "}
                <span className="text-gray-400 text-sm font-normal">
                  + included VAT
                </span>
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Appointment Booking Section */}
      <div className="border border-blue-200 rounded-2xl mt-8 shadow-lg">
        <div className="flex justify-center items-center text-center p-6 md:p-8">
          <div className="max-w-md w-full">
            <h1 className="text-3xl font-bold">Book An Appointment</h1>

            <div className="flex flex-col sm:flex-row justify-between items-center mt-6 gap-4">
              <p className="py-2 font-bold text-lg">Today's Availability</p>
              <button className="btn px-4 py-2 rounded-xl text-white bg-green-600 hover:bg-green-700 text-sm w-full sm:w-auto">
                Doctor is Available
              </button>
            </div>

            <p className="mt-6 mb-4 p-3 text-yellow-800 bg-yellow-100 rounded-lg text-sm border border-yellow-300">
              Due to high patient volume, we are currently accepting
              appointments for today only. We appreciate your understanding.
            </p>

            <NavLink to="/bookings" className="w-full">
              <button
                onClick={() => handleBookAppointment(doctor)}
                className="btn rounded-lg mt-4 bg-blue-600 text-white hover:bg-blue-700 text-md lg:text-lg"
              >
                Book Appointment Now
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
