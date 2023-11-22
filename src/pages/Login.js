// Login.js
import React, { useState } from "react";
import { connect } from "react-redux";
import { loginSuccess, loginFailure, logout } from "../redux/actions";

const Login = ({
  isAuthenticated,
  error,
  loginSuccess,
  loginFailure,
  logout,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // Hard-coded username and password for demonstration
    const validUsername = "demoUser";
    const validPassword = "demoPassword";

    if (username === validUsername && password === validPassword) {
      loginSuccess();
    } else {
      loginFailure();
    }
  };

  return (
    <>
      <div className="flex flex-col w-2/5 justify-around h-5/6 absolute inset-x-0 ml-auto mr-auto">
        <h2 className="mt-10 text-2xl font-bold leading-9 tracking-tight text-black-900">
          Prijavi se na svoj nalog
        </h2>
        <div className="flex flex-col">
          <label className="mb-4">E-mail adresa:</label>
          <input
            className="border-b-[1px] border-black outline-none h-11"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            className="border-b-[1px] border-black  w-full outline-none h-11"
            placeholder="Upisite sifru"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button
            className="bg-black text-white w-full rounded-full h-[45px]"
            onClick={handleLogin}
          >
            Prijavi se na nalog
          </button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.auth.error,
});

const mapDispatchToProps = {
  loginSuccess,
  loginFailure,
  logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
