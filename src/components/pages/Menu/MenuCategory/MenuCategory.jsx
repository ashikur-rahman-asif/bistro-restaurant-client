// import React from 'react';

import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";

// import useMenu from "../../../hooks/useMenu";

const MenuCategory = ({items,coverImg,title}) => {

    
    return <div className="pt-8">
        {title &&
            <Cover img={coverImg} title={title} />}
      <div className="grid md:grid-cols-2 gap-8 mt-16">
                {
                    items.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
        </div>
        <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4">Order Now</button></Link>
  </div>;
};

export default MenuCategory;
