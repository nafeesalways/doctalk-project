import React from "react";
import img1 from "../../assets/success-doctor.png";
import img2 from "../../assets/success-review.png";
import img3 from "../../assets/success-patients.png";
import img4 from "../../assets/success-staffs.png";
import CountUp from "react-countup";



const Service = () => {
;
  return (
    <div className="flex space-x-5 justify-center mt-7">
      <div className="border border-blue-500 p-6 rounded-lg">
        <img className="h-9 w-9" src={img1} alt="" />
    <div className="flex space-x-3">
        
        <CountUp duration={10} start={0} end={2000} style={{fontSize:'25px',
            fontWeight: 'bold',
            textAlign: 'center',
        }}></CountUp>
         <h3 className="text-2xl">+</h3>
    </div>
        <p className="font-semibold">Total Doctors</p>
      </div>
      <div className="border p-6 border-blue-500 rounded-lg">
        <img className="h-9 w-9" src={img2} alt="" />
        <div className="flex space-x-3">
        <CountUp duration={10} start={0} end={1400} style={{fontSize:'25px',
            fontWeight: 'bold',
            textAlign: 'center',
        }}></CountUp>
         <h3 className="text-2xl">+</h3>
    </div>
        <p className="font-semibold">Total reviews</p>
      </div>
      <div className="border border-blue-500 p-6 rounded-lg">
        <img className="h-9 w-9" src={img3} alt="" />
        <div className="flex space-x-3">
       
        <CountUp duration={10}  start={0} end={1500} style={{fontSize:'25px',
            fontWeight: 'bold',
            textAlign: 'center',
        }}></CountUp>
         <h3 className="text-2xl">+</h3>
    </div>
        <p className="font-semibold">Patients</p>
      </div>
      <div className="border border-blue-500 p-6 rounded-lg">
        <img className="h-9 w-9" src={img4} alt="" />
        <div className="flex space-x-3">
        
        <CountUp duration={10} start={0} end={1200} style={{fontSize:'25px',
            fontWeight: 'bold',
            textAlign: 'center',
        }}></CountUp>
        <h3 className="text-2xl">+</h3>
    </div>
        <p className="font-semibold">Total Stuffs</p>
      </div>
    </div>
  );
};

export default Service;
