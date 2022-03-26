import React from "react";
import Closure from "../components/Main/components/JS/Closure/Closure";
import CopyObjects from "../components/Main/components/JS/CopyObjects/CopyObjects";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const JSRoutes: IRoute[] = [
    {path: "/JS/Closure", exact: true, component: Closure},
    {path: "/JS/CopyObjects", exact: true, component: CopyObjects}
]