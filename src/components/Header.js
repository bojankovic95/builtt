import React from "react";

const Header = () => {
  return (
    <div className="h-[69px] bg-[#F0F0F0] w-full p-4 flex justify-between">
      <a href="/">
        {" "}
        <img className="" src="/images/logo.svg" />
      </a>
      <a href="/cart" className="relative cursor-pointer">
        <img className="w-[30px]" src="/images/Cart.png" />
        <p className="absolute top-2 left-2 text-sm">16</p>
      </a>
    </div>
  );
};

export default Header;
