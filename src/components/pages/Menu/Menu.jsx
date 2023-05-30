// import React from 'react';

import PageTitle from "../../../PageTitle/PageTitle";
import Cover from "../Shared/Cover/Cover";
import menuImg from "../../../assets/menu/banner3.jpg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import soupImg from "../../../assets/menu/soup-bg.jpg";
// import PopularMenu from "../Home/PopularMenu/PopularMenu";
import SectionTitle from "../Shared/SectionTitle/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./MenuCategory/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((items) => items.category === "dessert");
  const soup = menu.filter((items) => items.category === "soup");
  const salad = menu.filter((items) => items.category === "salad");
  const pizza = menu.filter((items) => items.category === "pizza");
  const offered = menu.filter((items) => items.category === "offered");
  return (
    <div>
      <PageTitle title="Bistro | Menu"></PageTitle>
      <Cover img={menuImg} title="our menu" />
      <SectionTitle
        subHeading="Don't miss"
        heading="Today's Offer"
      ></SectionTitle>
      {/* offered menu item */}
      <MenuCategory items={offered}></MenuCategory>

      {/* desserts menu items */}
      <MenuCategory
        items={dessert}
        title={"Dessert"}
        coverImg={dessertImg}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={pizza}
        title={"Pizza"}
        coverImg={pizzaImg}
      ></MenuCategory>
      {/* salad menu items */}
      <MenuCategory
        items={salad}
        title={"Salad"}
        coverImg={saladImg}
      ></MenuCategory>
      {/* pizza menu items */}
      <MenuCategory
        items={soup}
        title={"Soup"}
        coverImg={soupImg}
      ></MenuCategory>
    </div>
  );
};

export default Menu;
