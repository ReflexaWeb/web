import React from "react";
import { Switch, Route } from 'react-router-dom'

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/produto/:code">
      <Details />
    </Route>
  </Switch>
)

export default Routes;