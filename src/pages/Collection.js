// App.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "../redux/actions";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import CartCard from "../components/CartCard";

const CollectionPage = () => {
  const products = useSelector((state) => state.products.products);
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  return (
    <>
      <Header />
      <div className="flex items-center mb-8">
        <p className="mt-10 text-2xl font-bold text-black-900 px-20">
          Svi proizvodi
        </p>
        <p className="mt-10 text-m font-bold text-neutral-700 font-thin">
          {products.length} proizvoda
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 px-20 pb-20">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            src={product.image}
            alt={product.name}
            name={product.name}
            price={product.price}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
};

export default CollectionPage;
