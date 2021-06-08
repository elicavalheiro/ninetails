import { Switch, Route } from "react-router-dom";

import { allRoutes } from "./routes";

export const Routes = () => {
  return (
    <Switch>
      {allRoutes.map(({ path, component, exact }) => (
        <Route path={path} component={component} exact={exact} />
      ))}
    </Switch>
  );
};
