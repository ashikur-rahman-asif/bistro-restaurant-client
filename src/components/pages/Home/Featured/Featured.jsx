// import React from 'react';

import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import featuredImg from '../../../../assets/home/featured.jpg'
import moment from "moment/moment";
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-items text-white pt-6 my-20">
            <SectionTitle
                heading="Featured Item"
                subHeading="check it Out"
            ></SectionTitle>
            <div className="md:flex justify-center items-center pb-20 pt-12 px-36">
                <div>
                <img src={featuredImg} alt="" />
                </div>
                <div className="md:mx-10">
                    <p>{moment().format("dddd, MMMM D, YYYY, h:mm a")}</p>
                    <p className="uppercase">where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore ab facere dignissimos beatae nisi, minima illo, obcaecati aspernatur, recusandae excepturi iure alias velit aliquam tempora rem exercitationem voluptatibus! Sed corporis illum delectus vel cum. Est ullam nemo consectetur ipsum assumenda temporibus recusandae consequatur, tempore nisi voluptatum, alias quis! Harum, ratione?</p>
                    <button className="btn btn-outline">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;