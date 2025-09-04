import React from "react";
import { RiRegisteredLine } from "react-icons/ri";
import { Link } from "react-router";

const Doctor = ({ singleDoctor }) => {
  const {
    image,
    name,
    id,
    education,
    experience,
    speciality,
    registrationNumber,
  } = singleDoctor;
  if (!singleDoctor) {
    return "error";
  }
  return (
   <div className="card w-full mx-auto max-w-sm md:max-w-md lg:max-w-[410px] bg-white border shadow-md rounded-xl transition-transform hover:scale-[1.01] duration-300">
      <figure className="p-6">
        <img
          src={image}
          alt={name}
          className="w-full h-56 object-cover rounded-lg"
        />
      </figure>

      <div className="px-6">
        <h2 className="text-xl font-bold text-center mb-2">{name}</h2>
        <p className="text-sm text-center text-gray-600 mb-4 border-t pt-2">
          <span className="font-medium">{education}</span>
        </p>

        <div className="flex flex-wrap justify-center gap-2 mb-4">
          <span className="text-sm px-3 py-1 bg-green-600 text-white rounded-full">
            Speciality: {speciality}
          </span>
          <span className="text-sm px-3 py-1 bg-blue-600 text-white rounded-full">
            Experience: {experience}
          </span>
        </div>

        <div className="flex items-center justify-center text-sm text-gray-700 mb-4">
          <RiRegisteredLine className="mr-2 text-xl text-blue-600" />
          Reg No: <span className="ml-1 font-semibold">{registrationNumber}</span>
        </div>

        <div className="pb-6 px-4">
          <Link to={`/doctorDetails/${id}`}>
            <button className="btn btn-outline btn-primary w-full rounded-lg">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
