import React from "react";
import EventLoop from "../components/Main/components/Api/EventLoop/EventLoop";
import Closure from "../components/Main/components/JS/Closure/Closure";
import CopyObjects from "../components/Main/components/JS/CopyObjects/CopyObjects";
import ReactHooks from "../components/Main/components/React/ReactHooks/ReactHooks";
import WhatIsReact from "../components/Main/components/React/WhatIsReact/WhatIsReact";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const JSRoutes: IRoute[] = [
    {path: "/JS/Closure", exact: true, component: Closure},
    {path: "/JS/CopyObjects", exact: true, component: CopyObjects}
]

export const ReactRoutes: IRoute[] = [
    {path: "/React/DefinitionOfReact", exact: true, component: WhatIsReact},
    {path: "/React/ReactHooks", exact: true, component: ReactHooks}
]

export const ApiRoutes: IRoute[] = [
    {path: "/Api/EventLoop", exact: true, component: EventLoop},
]