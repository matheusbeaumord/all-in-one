import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
// import PrivateRouter from './PrivateRoute';
import { IRoutes } from './routes';

const Routes: React.FC = () => {
  const renderRoutes = ({ component, path, exact, isProtected }: IRoutes) => {

    return (
      <Route path={path} component={component} key={path} exact={!!exact} />
    );
  };

  return <Switch>{routes.map(renderRoutes)}</Switch>;
};

export default Routes;
