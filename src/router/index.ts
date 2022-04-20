import React from "react";
import EventLoop from "../components/Main/components/Api/EventLoop/EventLoop";
import Protocols from "../components/Main/components/Api/Protocols/Protocols";
import WhatIsHTML from "../components/Main/components/HTML/WhatIsHTML/WhatIsHTML";
import ArrToObj from "../components/Main/components/JS/ArrToObj/ArrToObj";
import Closure from "../components/Main/components/JS/Closure/Closure";
import CopyObjects from "../components/Main/components/JS/CopyObjects/CopyObjects";
import FunctionJS from "../components/Main/components/JS/FunctionJS/FunctionJS";
import DataTypes from "../components/Main/components/JS/JavaScriptDataTypes/DataTypes";
import ReactHooks from "../components/Main/components/React/ReactHooks/ReactHooks";
import WhatIsReact from "../components/Main/components/React/WhatIsReact/WhatIsReact";

export interface IRoute {
    path: string;
    component: React.ComponentType;
    exact?: boolean;
}

export const JSRoutes: IRoute[] = [
    {path: "/JS/Closure", exact: true, component: Closure},
    {path: "/JS/CopyObjects", exact: true, component: CopyObjects},
    {path: "/JS/FunctionJS", exact: true, component: FunctionJS},
    {path: "/JS/DataTypes", exact: true, component: DataTypes},
    {path: "/JS/ArrToObj", exact: true, component: ArrToObj},
]

export const ReactRoutes: IRoute[] = [
    {path: "/React/DefinitionOfReact", exact: true, component: WhatIsReact},
    {path: "/React/ReactHooks", exact: true, component: ReactHooks}
]

export const ApiRoutes: IRoute[] = [
    {path: "/Api/EventLoop", exact: true, component: EventLoop},
    {path: "/Api/Protocols", exact: true, component: Protocols},
]

export const HTMLRoutes: IRoute[] = [
    {path: "/HTML/WhatIsHTML", exact: true, component: WhatIsHTML},
]