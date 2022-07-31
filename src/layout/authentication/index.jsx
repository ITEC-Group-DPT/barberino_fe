import React, { useState } from "react";
import "./authentication.scss";
import Logo from "assets/icons/logo.png";
import ShowPassword from "assets/icons/ic_eye.svg";
import { useNavigate } from "react-router-dom";

const admin = {
  username: "admin@gmail.com",
  password: "barberino",
};
const Authentication = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const onLogin = (e) => {
    e.preventDefault();
    if (username === admin.username && password === admin.password) {
      localStorage.setItem("isLogin", true);
      navigate("/admin");
    } else {
      alert("Incorrect username or password");
    }
  };
  return (
    <div className="signin">
      <div className="signin__container">
        <img className="signin__logo" src={Logo} alt="Logo" />
        <h3 className="signin__subTitle">
          Barberino Admin Dashboard
        </h3>

        <h2 className="signin__title">Log In</h2>

        <form className="signin__form">
          <label className="signin__field" htmlFor="email">
            Email
            <input
              className="signin__input"
              name="email"
              placeholder="Email address"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          <label className="signin__field" htmlFor="password">
            Password
            <input
              className="signin__input"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <img
              className="signin__showPassword"
              aria-hidden
              onClick={() => setShowPassword((status) => !status)}
              src={ShowPassword}
              alt="Open password"
            />
          </label>

          <button
            onClick={onLogin}
            className="signin__submit"
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;
