import { Switch, Route } from "react-router-dom";

import { allRoutes } from './routes';

export const Routes = () => {
  return (
    <Switch>
      {allRoutes.map((route, index) => (
        <Route key={`${index}${route}`} {...route} />
      ))}
    </Switch>
  );
};  