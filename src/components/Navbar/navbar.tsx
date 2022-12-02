import React from "react";

// Interfaces
import { NavBarProps, RouteProps } from "configs/interfaces";

// Components
import NavIcon from "components/Navbar/NavIcon/navicon";

// Styling
import "components/Navbar/Navbar.scss";
import { useLocation } from "react-router-dom";

const NavBar = ({ routes }: NavBarProps) => {
  const location = useLocation();
  return (
    <div className="navbar">
      {routes.map((route: RouteProps) => {
        const active = route.route?.path === location.hash;
        return <NavIcon active={active} key={route.key} route={route} />;
      })}
    </div>
  );
};

export default NavBar;
