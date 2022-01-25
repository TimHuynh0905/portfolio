import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIconProps } from "@fortawesome/react-fontawesome";

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
        element: () => JSX.Element;
    };
    href?: string;
    icon: IconDefinition;
}
