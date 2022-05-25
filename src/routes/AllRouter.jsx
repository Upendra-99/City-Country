import React from "react";
import { Route, Routes } from "react-router";
import { AddCity } from "./AddCity";
import { AddCountry } from "./AddCountry";
import { Home } from "./Home";
import { Login } from "./Login";
import { Signup } from "./Signup";

export const AllRoutes = () => {
    return <>
        <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/login"} element={<Login />} />
            <Route path={"/add-city"} element={<AddCity />} />
            <Route path={"/add-country"} element={<AddCountry />} />
            <Route path="/signup" element={<Signup />} />
        </Routes>
    </>
}