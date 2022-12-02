import React, { useEffect, useState } from "react";

// Packages
import clsx from "clsx";
import { useLocation, useNavigate } from "react-router-dom";
import { Height } from "react-animate-height";

import withAnimation from "lib/withAnimation";

// Interfaces
import { NavBarProps, RouteProps } from "configs/interfaces";

// Styles
import "./SmallNavbar.scss";

interface IDropdown {
  routes: RouteProps[];
}

const Dropdown = ({ routes }: IDropdown): JSX.Element => {
  const navigate = useNavigate();
  return (
    <ul className="navbar-small__dropdown">
      {routes.map((route, key) => {
        if (!route.route) {
          return null;
        }

        return (
          <li
            key={key}
            className="navbar-small__dropdown-item"
            onClick={() => navigate(route.route!.path)}
          >
            {route.name}
          </li>
        );
      })}
    </ul>
  );
};

const AnimatedDropdown = withAnimation(Dropdown);

const SmallNavbar = ({ routes }: NavBarProps): JSX.Element => {
  const [active, setActive] = useState<boolean>(false);
  const [height, setHeight] = useState<Height>(0);
  const location = useLocation();

  const handleToggle = () => {
    setActive(!active);
    setHeight((height) => (height === 0 ? "auto" : 0));
  };

  useEffect(() => {
    setActive(false);
    setHeight(0);
  }, [location.hash]);

  return (
    <div className="navbar-small">
      <div className="navbar-small__bar">
        <h4>Welcome, y&rsquo;all! &#128075;</h4>
        <div
          className={clsx("navbar-small__toggle", [
            {
              active: active,
            },
          ])}
          onClick={handleToggle}
        >
          <i></i>
          <i></i>
          <i></i>
        </div>
      </div>
      <AnimatedDropdown height={height} routes={routes} />
    </div>
  );
};

export default SmallNavbar;
