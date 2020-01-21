import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Content/Home';
import Register from '../Content/Login/Register';
import Driver from '../Content/Driver';
import ViewReports from '../Content/Driver/ViewReports';
import FileReport from '../Content/Driver/FileReport';
import Mechanic from '../Content/Mechanic';
import NotFound from '../Content/NotFound';

export default function Routes() {
    return (
        <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/register' component={Register} />
            <Route exact path='/Driver/:empId' component={Driver} />
            <Route exact path='/Driver/:empId/view_reports' component={ViewReports} />
            <Route exact path='/Driver/:empId/file_report' component={FileReport} />
            <Route exact path='/Mechanic/:empId' component={Mechanic} />
            <Route component={NotFound} />

        </Switch>
    );
};