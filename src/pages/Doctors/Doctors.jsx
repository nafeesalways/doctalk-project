import React, { Suspense } from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = ({ data }) => {
  return (
    <div>
      <h3 className="text-3xl font-bold mb-3 mt-5">Our Best Doctors</h3>
      <p className="text-gray-500 mb-3">
        Our platform connects you with verified, experienced doctors across
        various specialties — all at your convenience. Whether it's a routine
        checkup or urgent consultation, book appointments in minutes and receive
        quality care you can trust.
      </p>
      <Suspense fallback={<span className="loading loading-bars loading-md"></span>}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((singleDoctor) => (
            <Doctor key={singleDoctor.id} singleDoctor={singleDoctor}></Doctor>
          ))}
        </div>
      </Suspense>
    </div>
  );
};

export default Doctors;
