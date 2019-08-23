﻿import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
//import { routerReducer, routerMiddleware } from 'react-router-redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import * as Employee from './store/EmployeeStore';

export default function configureStore(history, initialState) {
    const reducers = {
        employee: Employee.reducer
    };

    const middleware = [
        thunk,
        routerMiddleware(history)
    ];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';

    if (isDevelopment && typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push(window.devToolsExtension());
        //window.__REACT_DEVTOOLS_GLOBAL_HOOK__.inject = function () { }
    }

    const rootReducer = combineReducers({
        ...reducers,
        //routing: routerReducer
        router: connectRouter(history)
    });

    return createStore(
        rootReducer,
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers)
    );
}