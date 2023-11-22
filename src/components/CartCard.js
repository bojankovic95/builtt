import React from "react";

const CartCard = (props) => {
  return (
    <div className="flex relative w-[764px] justify-between border-b border-black py-8">
      <img className="w-[140px]" src={props.src} />
      <div className="flex flex-col justify-between h-[140px]">
        <p className="text-xl font-bold text-black-900 mt-2 font-semibold">
          {props.name}
        </p>
        <p className="block underline underline-offset-2">Ukloni</p>
      </div>
      <div className="flex">
        <p className="text-xl font-bold text-black-900 mt-1 font-medium">
          {props.price}
        </p>
        <p className="text-sm font-bold text-black-900 font-thin">RSD</p>
      </div>
    </div>
  );
};

export default CartCard;
