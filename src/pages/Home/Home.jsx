import React, { useState } from "react";
import Banner from "../../components/Banner/Banner";
import Doctors from "../Doctors/Doctors";
import { useLoaderData } from "react-router";
import Service from "../../components/Services/Service";

const Home = () => {
  const data = useLoaderData();
  const [doctors, setDoctors] = useState([...data]);
  const handleSearch = (e) => {
    e.preventDefault();
    const text = e.target.searchedText.value;
    if(text === "") return setDoctors([...data]);
    console.log(text);
    const searchedDoctors = [...data].filter((doctor) => doctor?.name?.toLowerCase().split(" ").includes(text.toLowerCase()) || doctor.speciality?.toLowerCase().split(" ").includes(text.toLowerCase())
)
     ;
     console.log(searchedDoctors)
    setDoctors(searchedDoctors);
  };

  return (
    <div>
      <Banner handleSearch={handleSearch}></Banner>
      <Doctors data={doctors}></Doctors>
      <Service></Service>
    </div>
  );
};

export default Home;
