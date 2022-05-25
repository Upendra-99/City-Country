import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";

export const NavBar = () => {
  const navigate = useNavigate()

  let hanleLogout = () => {
    if (window.confirm('Do you want to logout?')) {
      navigate("/login")
    }
  }
  return (
    <>
      <nav>
        <Link to={"/"}> Home </Link>
        <Link to={"/add-country"}> Add Country </Link>
        <Link to={"/add-city"}> Add City </Link>
        <Link to={"/add-city"}> Add City </Link>
        <button onClick={hanleLogout}>Logout</button>
      </nav>
    </>
  );
};
