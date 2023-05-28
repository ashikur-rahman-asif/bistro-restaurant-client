// import React from 'react';

import BgText from "../BgText/BgText";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import Hero from "../Hero/Hero";
import PopularMenu from "../PopularMenu/PopularMenu";

const Home = () => {
    return (
        <div>
            <Hero />
            <Category />
            <BgText />
            <PopularMenu />
            <Featured/>
        </div>
    );
};

export default Home;