import React from "react";

// Page Component
import Home from "pages/home/home";
import About from "pages/about/about";
import Experiences from "pages/experiences/experiences";

// Font Awesome Icons
import { faHome, faUser, faBriefcase } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

// Interfaces
import { RouteProps } from "configs/interfaces";

export const navRoutes: RouteProps[] = [
    {
        name: "Home",
        key: "home",
        route: {
            path: "/",
            element: <Home />,
        },
        icon: faHome,
    },
    {
        name: "About",
        key: "about",
        route: {
            path: "/about",
            element: <About />,
        },
        icon: faUser,
    },
    {
        name: "Experiences",
        key: "experiences",
        route: {
            path: "/experiences",
            element: <Experiences />,
        },
        icon: faBriefcase,
    },
];

export const hrefRoutes: RouteProps[] = [
    {
        name: "LinkedIn",
        key: "linkedin",
        href: "https://www.linkedin.com/in/qthuynh9501",
        icon: faLinkedin,
    },
    {
        name: "GitHub",
        key: "github",
        href: "https://github.com/TimHuynh0905",
        icon: faGithub,
    },
];

export default [...navRoutes, ...hrefRoutes];
