// import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/pages/Shared/NavBar/NavBar';
import Footer from '../components/pages/Shared/Footer/Footer';

const MainLayout = () => {
    const location = useLocation()
    console.log(location)
    const noHeaderFooter = location.pathname.includes('login') ||
    location.pathname.includes('signup')
    return (
        
        <div>
            {noHeaderFooter ||
                <NavBar />}
            <Outlet />
            {noHeaderFooter ||
                <Footer />}
        </div>
    );
};

export default MainLayout;