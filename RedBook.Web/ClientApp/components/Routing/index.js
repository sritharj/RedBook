import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Content/Home';
import Drivers from '../Content/Drivers';


export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Drivers} />
        </Switch>
    );
};