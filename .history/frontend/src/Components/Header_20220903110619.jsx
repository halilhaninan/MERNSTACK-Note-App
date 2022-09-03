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

  return (
    <AppBar position="static" color="error" sx={{ marginBottom: "10px" }}>
      <Toolbar>
        <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
          Note App
        </Typography>
        {kullanici ? (
          <>
            <Button
              sx={{ marginRight: "10px" }}
              colors="inherit"
              size="large"
              startIcon={<Home />}
              onClick={anasayfayaGit}>
              Home Page
            </Button>
            <Button
              variant="outlined"
              sx={{ marginRight: "10px" }}
              colors="inherit"
              size="size"
              startIcon={<Logout />}
              onClick={onLogout}>
              Sign out
            </Button>
          </>
        ) : (
          <></>
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
