// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "./redux/actions";
import Login from "./pages/Login";
import CollectionPage from "./pages/Collection";
import Cart from "./pages/Cart";

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Dispatch the logout action
    dispatch(logout());
  };

  return (
    <Router>
      <div>
        <Routes>
          {/* Route for the login page */}
          <Route
            path="/login"
            element={
              !isAuthenticated ? <Login /> : <Navigate to="/collection" />
            }
          />

          {/* Route for the collection page */}
          <Route
            path="/collection"
            element={
              isAuthenticated ? <CollectionPage /> : <Navigate to="/login" />
            }
          />

          <Route
            path="/cart"
            element={!isAuthenticated ? <Cart /> : <Navigate to="/login" />}
          />

          {/* Redirect to /login for any other unknown routes */}
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
