import React from "react";

// Packages
import clsx from "clsx";
import { useNavigate } from "react-router-dom";

// Interfaces
import { NavIconProps } from "configs/interfaces";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Styles
import "components/Navbar/NavIcon/navicon.scss";

const NavIcon = ({ route, active }: NavIconProps) => {
  const navigate = useNavigate();
  return (
    <>
      {route.route && (
        <div
          className={clsx("nav-icon", [
            {
              active: active,
            },
          ])}
          onClick={() => {
            navigate(route.route!.path);
          }}
        >
          <div className="tag">{route.name}</div>
          <div className="icon">
            <FontAwesomeIcon icon={route.icon} />
          </div>
        </div>
      )}
      {route.href && (
        <a
          href={route.href}
          rel="noopener noreferrer"
          target="_blank"
          className="nav-icon"
        >
          <div className="tag">{route.name}</div>
          <div className="icon">
            <FontAwesomeIcon icon={route.icon} />
          </div>
        </a>
      )}
    </>
  );
};

export default NavIcon;
