import React from "react";

// Page Component
import Home from "pages/home/home";
import About from "pages/about/about";
import Projects from "pages/projects/projects";

// Font Awesome Icons
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    faAppStore,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

// Interfaces
import { RouteProps } from "configs/interfaces";

const routes: RouteProps[] = [
    {
        name: "Home",
        key: "home",
        route: {
            path: "/home",
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
        name: "Projects",
        key: "projects",
        route: {
            path: "/projects",
            element: <Projects />,
        },
        icon: faAppStore,
    },
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

export default routes;
