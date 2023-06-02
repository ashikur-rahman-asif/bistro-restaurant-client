// import React from 'react';

import FoodCard from "../../FoodCard/FoodCard";
// import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

//TODO: implement pagination here
const OrderTab = ({items}) => {
    return (
        <div className="grid md:grid-cols-3">
                  {
                    items.map(item => <FoodCard
                        key={item._id}
                        item={item}
                    ></FoodCard>)
                  }
                 </div>
    );
};

export default OrderTab;