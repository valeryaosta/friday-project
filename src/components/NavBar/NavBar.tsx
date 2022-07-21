import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from '../Routes/Routes';
import "./NavBar.css";

const NavBar = () => {
    return (
        <div className="links">
            <NavLink to={PATH.LOGIN} activeClassName="activeLink">Sign in </NavLink>
            <NavLink to={PATH.REGISTER} activeClassName="activeLink">Sign up </NavLink>
            <NavLink to={PATH.FORGOT_PASSWORD} activeClassName="activeLink">Forgot Password </NavLink>
            <NavLink to={PATH.NEW_PASSWORD} activeClassName="activeLink">New Password </NavLink>
            <NavLink to={PATH.PROFILE} activeClassName="activeLink">Profile </NavLink>
            <NavLink to={PATH.CARD_PACKS} activeClassName="activeLink">Packs </NavLink>
            <NavLink to={PATH.CARDS} activeClassName="activeLink">Cards </NavLink>
        </div>
    );
};

export default NavBar;
