import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as Employee from './store/EmployeeStore';

export default function configureStore(history, initialState) {
    const reducers = {
        employee: Employee.reducer
    };

    return createStore(
        combineReducers(Object.assign({}, reducers, { router: connectRouter(history) })),
        composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
    );
}