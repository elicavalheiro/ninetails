import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

export const allRoutes = [
  {
    path: "/",
    component: () => <Home />,
    exact: true,
  },
  {
    path: "/login",
    component: () => <Login />,
  },
];
