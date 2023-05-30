// import React from 'react';

import PageTitle from "../../../../PageTitle/PageTitle";
import BgText from "../BgText/BgText";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Hero from "../Hero/Hero";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <PageTitle title="Bistro | Home"></PageTitle>
            <Hero />
            <Category />
            <BgText />
            <PopularMenu />
            <Featured />
            <Testimonials/>
        </div>
    );
};

export default Home;