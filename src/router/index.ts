import React from "react";
import EventLoop from "../components/Main/components/Api/EventLoop/EventLoop";
import Protocols from "../components/Main/components/Api/Protocols/Protocols";
import WebDesignPatterns from "../components/Main/components/Api/WebDesignPatterns/WebDesignPatterns";
import Flex from "../components/Main/components/CSS/Flex/Flex";
import Position from "../components/Main/components/CSS/Position/Position";
import WhatIsHTML from "../components/Main/components/HTML/WhatIsHTML/WhatIsHTML";
import ArrToObj from "../components/Main/components/JS/ArrToObj/ArrToObj";
import Closure from "../components/Main/components/JS/Closure/Closure";
import CopyObjects from "../components/Main/components/JS/CopyObjects/CopyObjects";
import FunctionJS from "../components/Main/components/JS/FunctionJS/FunctionJS";
import DataTypes from "../components/Main/components/JS/JavaScriptDataTypes/DataTypes";
import Operators from "../components/Main/components/JS/Operators/Operators";
import ReactHooks from "../components/Main/components/React/ReactHooks/ReactHooks";
import WhatIsReact from "../components/Main/components/React/WhatIsReact/WhatIsReact";
import TypeScriptDataTypes from "../components/Main/components/TypeScript/TypeSctiprDataTypes/TypeScriptDataTypes";


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
    {path: "/JS/Operators", exact: true, component: Operators},
]

export const ReactRoutes: IRoute[] = [
    {path: "/React/DefinitionOfReact", exact: true, component: WhatIsReact},
    {path: "/React/ReactHooks", exact: true, component: ReactHooks}
]

export const ApiRoutes: IRoute[] = [
    {path: "/Api/EventLoop", exact: true, component: EventLoop},
    {path: "/Api/Protocols", exact: true, component: Protocols},
    {path: "/Api/WebDesignPatterns", exact: true, component: WebDesignPatterns},
]

export const HTMLRoutes: IRoute[] = [
    {path: "/HTML/WhatIsHTML", exact: true, component: WhatIsHTML},
]

export const CSSRoutes: IRoute[] = [
    {path: "/CSS/Flex", exact: true, component: Flex},
    {path: "/CSS/Position", exact: true, component: Position},
]

export const TSRoutes: IRoute[] = [
    {path: "/TS/DataTypes", exact: true, component: TypeScriptDataTypes},
]