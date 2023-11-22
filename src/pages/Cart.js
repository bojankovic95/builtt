// App.js
import React from "react";
import { useSelector } from "react-redux";
import CartCard from "../components/CartCard";
import Header from "../components/Header";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <>
      <Header />
      <div className="flex items-center mb-8">
        <p className="mt-10 text-2xl font-bold text-black-900 px-20">
          Tvoja korpa
        </p>
      </div>

      <div className="px-20 flex justify-between">
        <div className="flex flex-col">
          {cartItems.map((product) => (
            <CartCard
              key={product.id}
              src={product.image}
              alt={product.name}
              name={product.name}
              price={product.price}
            />
          ))}
        </div>
        <div className="bg-[#F6F6F6] w-full ml-24 h-[450px] p-8">
          <p className="text-lg font-bold text-black-900">Tvoja narudzbina</p>

          <div className="flex justify-between py-4">
            <p>Ukupno</p>
            <p>19940</p>
          </div>

          <div className="flex justify-between py-4">
            <p>Usteda</p>
            <p>0</p>
          </div>

          <div className="flex justify-between py-4 border-b border-black">
            <p>Isporuka Daily Express*</p>
            <p>Besplatna</p>
          </div>

          <div className="flex justify-between py-4">
            <p>Ukupno za uplatu</p>
            <p>19940</p>
          </div>
          <button className="bg-black text-white w-full rounded-full h-[45px] mt-20">
            Prijavi se za brze placanje
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
