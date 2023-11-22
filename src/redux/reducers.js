// reducers.js
import { combineReducers } from "redux";
import authReducer from "./authReducer";
import productReducer from "./productsReducer";
import cartReducer from "./cartReducer"; // Import the new cart reducer

const rootReducer = combineReducers({
  auth: authReducer,
  products: productReducer,
  cart: cartReducer, // Add the cart reducer
});

export default rootReducer;
