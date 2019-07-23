import React from 'react';
import { Route, Switch } from 'react-router';
import Home from '../Content/Home';


export default function Routes() {
    return (
        <Switch>
            <Route path='/' exact component={Home} />
        </Switch>
    );
};