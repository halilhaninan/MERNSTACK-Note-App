import React from "react";
import { FaSignInAlt, FaSignOutAlt, FaUser, FaPen } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../features/auth/authSlice";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography, Button } from "@mui/material";
import { Login, Face, Home, Logout } from "@mui/icons-material";

function Header() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { kullanici } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  const girisYap = () => {
    navigate("/login");
  };

  const uyeol = () => {
    navigate("/register");
  };

  const anasayfayaGit = () => {
    navigate("/");
  };

  return (
    <AppBar position="static" color="error" sx={{ marginBottom: "10px" }}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Note App
        </Typography>
        {kullanici ? (
          <>
            <Button
              sx={{ marginRight: "10px", color: "white" }}
              colors="primary"
              size="large"
              startIcon={<Home />}
              onClick={anasayfayaGit}>
              Home Page
            </Button>
            <Button
              sx={{ color: "white", border: "white" }}
              variant="outlined"
              colors="inherit"
              size="small"
              startIcon={<Logout />}
              onClick={onLogout}>
              Logout
            </Button>
          </>
        ) : (
          <>
            <Button
              sx={{ marginRight: "10px" }}
              colors="inherit"
              size="large"
              startIcon={<Login />}
              onClick={girisYap}>
              Login
            </Button>
            <Button
              variant="outlined"
              colors="inherit"
              size="small"
              startIcon={<Face />}
              onClick={uyeol}>
              Register
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );

  // return (
  //   <header className="header">
  //     <h2>mongo db test app </h2>
  //     <div className="logo"></div>
  //     <ul>
  //       {kullanici ? (
  //         <>
  //           <li>
  //             <Link to="/">
  //               <FaPen /> Create Note
  //             </Link>
  //           </li>
  //           <li>
  //             <button className="btn" onClick={onLogout}>
  //               Logout{" "}
  //             </button>
  //           </li>
  //         </>
  //       ) : (
  //         <>
  //           <li>
  //             <Link to="/login">
  //               <FaSignInAlt /> Login
  //             </Link>
  //           </li>
  //           <li>
  //             <Link to="/register">
  //               <FaUser /> Register
  //             </Link>
  //           </li>
  //         </>
  //       )}
  //     </ul>
  //   </header>
  // );
}

export default Header;
