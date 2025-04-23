import React from 'react';
import Banner from '../../components/Banner/Banner';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router';
import Service from '../../components/Services/Service';


const Home = () => {
    const data = useLoaderData();
  

    return (
        <div>
         <Banner></Banner>
         <Doctors data={data}></Doctors>
       <Service></Service>
        </div>
    );
};

export default Home;