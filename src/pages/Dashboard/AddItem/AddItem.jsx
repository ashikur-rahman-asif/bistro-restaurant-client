// import React from 'react';

import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from "react-hook-form";
const AddItem = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
      console.log(errors);
  return (
    <div className="w-full">
      <SectionTitle subHeading="What's new" heading="Add Item"></SectionTitle>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Recipe Name*</span>
          </label>
          <input
            type="text"
            placeholder="Recipe name"
                      className="input input-bordered w-full max-w-xs"
                      {...register("name", { required: true, maxLength: 80 })}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Category*</span>
          </label>
          <select className="select select-bordered" {...register("category", { required: true })}>
            <option disabled selected>
              Pizza
            </option>
            <option>Soup</option>
            <option>Salad</option>
            <option>Dessert</option>
            <option>Drinks</option>
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text font-semibold">Price*</span>
          </label>
          <input
            type="number"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs" {...register("price", { required: true })}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Recipe Details*</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
          ></textarea>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Upload your Item*</span>
            
          </label>
          <input {...register("details", { required: true })}
            type="file"
            className="file-input file-input-bordered w-full max-w-xs"
          />
         
              </div>
              <input className="btn btn-sm px-10 mt-5" type="submit" value="SUBMIT" />
      </form>
    </div>
  );
};

export default AddItem;
