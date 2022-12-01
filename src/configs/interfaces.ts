import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export interface NavBarProps {
  routes: RouteProps[];
}

export interface NavIconProps {
  route: RouteProps;
  active: boolean;
}

export interface RouteProps {
  name: string;
  key: string;
  route?: {
    path: string;
    element: React.FC;
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
