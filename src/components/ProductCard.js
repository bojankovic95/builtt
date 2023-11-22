import React from "react";
import AddRemoveFromCart from "./AddRemoveFromCart";

const ProductCard = (props) => {
  return (
    <div className="relative" key={props.key}>
      <img src={props.src} alt={props.name} />
      <p className="text-xl font-bold text-black-900 mt-2 font-semibold">
        {props.name}
      </p>
      <div className="flex">
        <p className="text-xl font-bold text-black-900 mt-1 font-medium">
          {props.price}
        </p>
        <p className="text-sm font-bold text-black-900 font-thin">RSD</p>
      </div>
      <div className="flex">
        <AddRemoveFromCart />
        <img
          src="/images/add.svg"
          className="absolute top-[240px] left-[110px]"
        />
      </div>
    </div>
  );
};

export default ProductCard;
