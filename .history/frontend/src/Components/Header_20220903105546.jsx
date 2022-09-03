import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaPen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, Button } from "@mui/material";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { kullanici } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  return (
    <header className="header">
      <h2>mongo db test app </h2>
      <div className="logo"></div>
      <ul>
        {kullanici ? (
          <>
            <li>
              <Link to="/">
                <FaPen /> Create Note
              </Link>
            </li>
            <li>
              <button className="btn" onClick={onLogout}>
                Logout{" "}
              </button>
            </li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to="/register">
                <FaUser /> Register
              </Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}

export default Header;
