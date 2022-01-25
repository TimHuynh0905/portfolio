import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavIconProps } from "configs/interfaces";
import "components/Navbar/NavIcon/navicon.scss";

const NavIcon = ({ route }: NavIconProps) => {
    return (
        <>
            {route.route && (
                <NavLink to={route.route.path} className="nav-icon">
                    <div className="tag">{route.name}</div>
                    <div className="icon">
                        <FontAwesomeIcon icon={route.icon} />
                    </div>
                </NavLink>
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
