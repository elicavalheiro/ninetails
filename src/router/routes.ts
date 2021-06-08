import { ComponentType, ReactPropTypes } from "react";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export type RouteType = {
  path: string;
  name?: string;
  component: ComponentType;
  exact?: boolean;
  props?: ReactPropTypes;
}

export const allRoutes: RouteType[] = [
  {
    path: "/",
    name: "Home",
    component: Home,
    exact: true,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
];