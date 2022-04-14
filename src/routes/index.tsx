import React from "react";
import { Switch, Route } from 'react-router-dom'

import { Home } from '../pages/Home';
import { Details } from '../pages/Details';
import { Group } from '../pages/Group';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Home} />
    <Route path="/produto/:code">
      <Details />
    </Route >
    <Route path="/grupo/:code" component={Group}>

    </Route>
  </Switch>
)

export default Routes;