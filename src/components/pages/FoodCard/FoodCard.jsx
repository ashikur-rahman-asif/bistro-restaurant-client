// import React from 'react';

import { useContext } from "react";
import { AuthContext } from "../../Privider/AuthProvider";
import Swal from 'sweetalert2/dist/sweetalert2.js'
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, price, recipe,_id } = item;
  const { user } = useContext(AuthContext);
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const handleAddToCart = (item) => {
    console.log(item);
    if (user && user.email) {
      const cartItem= {menuItemId:_id,name,price,image,email:user.email}
      fetch("http://localhost:5000/carts", {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(cartItem)
        
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.insertedId) {
            refetch(); // refetch cart to update the number of items in the cart
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Item added successfully.',
              showConfirmButton: false,
              timer: 1500
            });
          }
        });
    }
    else{
      alert('Please Login in  first')
      navigate("/login", { state: { from: location } });
  }
    // else {
    //   Swal.fire({
    //     title: "Please login to order the food",
    //     icon: "warning",
    //     showCancelButton: true,
    //     confirmButtonColor: "#3085d6",
    //     cancelButtonColor: "#d33",
    //     confirmButtonText: "Login now!",
    //   }).then((data) => {
    //     if (data.isConfirmed) {
    //       navigate("/login", { state: { from: location } });
    //     }
    //   });
    // }
  };
  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={name} />
        </figure>
        <p className="absolute right-0 mr-4 mt-4 px-4 bg-slate-800 text-white">
          ${price}
        </p>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{recipe}</p>
          <div className="card-actions justify-end">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn btn-primary"
            >
              Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
