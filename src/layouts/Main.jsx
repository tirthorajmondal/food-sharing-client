import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';

const Main = () => {
    return (
        <div className=''>
            <div className=" lg:max-w-7xl mx-auto">
                <Navbar />
                <div className="" style={{ minHeight: 'calc(100vh - 76px)' }}>
                    <Outlet />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Main;