// import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/pages/Shared/NavBar/NavBar';
import Footer from '../components/pages/Shared/Footer/Footer';

const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet />
            <Footer/>
        </div>
    );
};

export default MainLayout;