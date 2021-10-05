import React, { Suspense } from "react";
import { Loading, PageNotFound } from "components";

import { Router, Route, Switch } from "react-router-dom";
import { WithLayoutRoute, ProtectedRoute } from "./routers";
import { createBrowserHistory } from "history";

import { AnimatePresence } from "framer-motion";
import { adminRoute, publicRoute } from "configs/route.configs";

export const history = createBrowserHistory();

const Routes = (props) => {
  const renderPublicRoute = () => {
    return publicRoute.map((route, index) => {
      const { path, exact, layout, component } = route;
      return (
        <WithLayoutRoute
          key={`${Date.now()}_${index}`}
          exact={exact}
          path={path}
          layout={layout}
          component={component}
        />
      );
    });
  };
  const renderAdminRoute = () => {
    return adminRoute.map((route, index) => {
      const { path, exact, layout, component } = route;
      return (
        <ProtectedRoute
          key={`${Date.now()}_${index}`}
          exact={exact}
          path={path}
          layout={layout}
          component={component}
        />
      );
    });
  };
  return (
    <Suspense fallback={<Loading />}>
      <Router history={history}>
        <AnimatePresence>
          <Switch>
            {renderPublicRoute()}
            {renderAdminRoute()}
            {/* Page not found */}
            <Route path="" component={PageNotFound} />
          </Switch>
        </AnimatePresence>
      </Router>
    </Suspense>
  );
};

export default Routes;
