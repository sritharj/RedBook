import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Content/Home';
import Login from '../Content/Login';


export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Login} />
        </Switch>
    );
};