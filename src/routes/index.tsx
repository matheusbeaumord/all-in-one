import React from 'react';
import { Route, Switch } from 'react-router-dom';
import routes from './routes';
import { IRoutes } from './routes';

const Routes: React.FC = () => {
  const renderRoutes = ({ component, path, exact }: IRoutes) => {

    return (
      <Route path={path} component={component} key={path} exact={!!exact} />
    );
  };

  return <Switch>{routes.map(renderRoutes)}</Switch>;
};

export default Routes;
