import React from "react";

const AddRemoveFromCart = () => {
  return (
    <div className="h-[35px] w-[100px] border-b-[1px] border-black rounded-full pt-1 absolute top-[240px] left-[5px] bg-white">
      <div className="flex justify-between w-3/4 m-auto">
        <p className="cursor-pointer">+</p>
        <p>0</p>
        <p className="cursor-pointer">-</p>
      </div>
    </div>
  );
};

export default AddRemoveFromCart;
