// store.js
import { createStore } from "redux";
import rootReducer from "./reducers"; // Import the combined reducer

const store = createStore(rootReducer);

export default store;
