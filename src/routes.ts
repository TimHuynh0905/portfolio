// Page Component
import Home from "pages/home/home";

// Font Awesome Icons
import { faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import {
    faAppStore,
    faLinkedin,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";

// Interfaces
import { RouteProps } from "configs/interfaces";
const Routes: RouteProps[] = [
    {
        name: "Home",
        key: "home",
        route: {
            path: "/home",
            element: Home,
        },
        icon: faHome,
    },
    {
        name: "About",
        key: "about",
        route: {
            path: "/about",
            element: Home,
        },
        icon: faUser,
    },
    {
        name: "Projects",
        key: "projects",
        route: {
            path: "/projects",
            element: Home,
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

export default Routes;
