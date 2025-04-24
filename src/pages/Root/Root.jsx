import React from 'react';
import Navbar from '../../components/Header/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/Footer/Footer';
import Loader from '../../components/Loader/Loader';


const Root = () => {
    const navigation = useNavigation()

    return (
        <div>
            <Navbar></Navbar>
         {navigation.state == 'loading'?<Loader></Loader> : <Outlet></Outlet>}
            <Footer></Footer>
        </div>
    );
};

export default Root;