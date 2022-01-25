import React from "react";

// Interfaces
import { NavBarProps, RouteProps } from "configs/interfaces";

// Components
import NavIcon from "components/Navbar/NavIcon/navicon";

// Styling
import "components/Navbar/navbar.scss";

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
