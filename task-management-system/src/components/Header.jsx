import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/reducers/authReducer";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return (
    <nav className="header">
      <Link to="/">Home</Link>
      {isAuthenticated ? (
        <>
          <Link to="/tasks">Tasks</Link>
          <button onClick={() => dispatch(logout())}>Logout</button>
        </>
      ) : (
        <>
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </>
      )}
    </nav>
  );
};

export default Header;