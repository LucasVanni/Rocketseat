import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Pages
import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';

const routes: React.FC = () => (
    <Switch>
        <Route path="/" exact component={Dashboard} />
        <Route path="/repositories/:repository_name+" component={Repository} />
    </Switch>
);

export default routes;
