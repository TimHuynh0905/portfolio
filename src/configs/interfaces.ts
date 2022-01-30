import { IconDefinition } from "@fortawesome/free-solid-svg-icons";

export interface NavBarProps {
    routes: RouteProps[];
}

export interface NavIconProps {
    route: RouteProps;
}

export interface RouteProps {
    name: string;
    key: string;
    route?: {
        path: string;
        element: JSX.Element;
    };
    href?: string;
    icon: IconDefinition;
}

export interface ExperienceItemProps {
    startDate: Date;
    endDate: Date;
    location: string;
    logo: string;
    role: string;
    skills: string[];
}
