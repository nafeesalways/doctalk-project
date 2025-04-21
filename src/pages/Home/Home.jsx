import React from 'react';
import Banner from '../../components/Banner/Banner';
import Doctors from '../Doctors/Doctors';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();

    return (
        <div>
         <Banner></Banner>
         <Doctors data={data}></Doctors>
        </div>
    );
};

export default Home;