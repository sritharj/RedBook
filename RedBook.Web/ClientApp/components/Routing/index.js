import React from 'react';
import { Route, Switch } from 'react-router';
import Login from '../Content/Login';
import Driver from '../Content/Driver';
import ViewReports from '../Content/Driver/ViewReports';
import Mechanic from '../Content/Mechanic';
import NotFound from '../Content/NotFound';

export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Login} />
            <Route path='/Driver/:empId' component={Driver} />
            <Route path='/Mechanic/:empId' component={Mechanic} />
            <Route path='/Driver/:empId/ViewReports' component={ViewReports} />
            <Route component={NotFound} />

        </Switch>
    );
};