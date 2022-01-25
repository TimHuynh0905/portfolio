import React from "react";

// Interfaces
import { NavBarProps, RouteProps } from "configs/interfaces";

import "components/Navbar/navbar.scss";

// Components
import NavIcon from "components/Navbar/NavIcon/navicon";

const NavBar = ({ routes }: NavBarProps) => {
    return (
        <div className="navbar">
            {routes.map((route: RouteProps) => {
                return <NavIcon key={route.key} route={route} />;
            })}
        </div>
    );
};

export default NavBar;
