import 'isomorphic-fetch';

const defaultState = {
    employee: JSON.parse(sessionStorage.getItem('emp')),
    activeUser: false,
    success: false,
    loading: false,
};

export const actionCreators = {

    authenticate: (empId, password) => (dispatch) => {

        const req = { empId: empId, password: password }

        const obj = Object.assign({}, req);
        dispatch({ type: 'EMP_LOGIN' });
        const url = `api/employee/authenticate/${empId}`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(data => {
                            dispatch({
                                type: 'EMP_LOGIN_COMPLETE',
                                emp: sessionStorage.setItem('emp', JSON.stringify(data)),
                                activeUser: true,
                                loading: true
                            });
                            
                        });
                }
                if (response.status >= 400) {
                    dispatch({ type: 'EMP_LOGIN_COMPLETE', emp: null, activeUser: false, loading: false });
                    alert('Login Failed. Please Try Again');
                }

            }).catch(err => {
                dispatch({ type: 'EMP_LOGIN_COMPLETE', activeUser: false });
                if (/NetworkError/i.test(err)) {
                    alert('A network error has occurred - data was not saved.Refresh this page and try again.');
                }
            });
    },

    signOut: () => (dispatch) => {
        if (sessionStorage.getItem('emp') != null) {
            dispatch({ type: 'EMP_SIGNOUT', emp: null, buses: null, activeUser: false });
            sessionStorage.clear();
            
        }

    },

    register: (empId, password, first, last, role) => (dispatch) => {
        const req = { empId: empId, password: password, first: first, last: last, role: role }

        const obj = Object.assign({}, req);
        dispatch({ type: 'REG_USER', req: req });
        const url = `api/employee/register`;
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(response => {
                if (response.status === 200) {
                    dispatch({ type: 'REG_USER_COMPLETE', req: req, success: true });
                    alert('Registration Successful');
                }
                if (response.status >= 400) {
                    dispatch({ type: 'REG_USER_COMPLETE', success: false });
                    alert('Error, registration failed');
                }
            }).catch(err => {
                dispatch({ type: 'REG_USER_COMPLETE', success: false });
                if (/NetworkError/i.test(err)) {
                    alert('A network error has occurred - data was not saved. Refresh this page and try again.');
                }
            });
    },

    loadBuses: () => (dispatch) => {
        dispatch({ type: 'REQUEST_BUS_LIST' });
        const url = `api/employee/busnos`;
        fetch(url)
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(data => {
                            dispatch({
                                type: 'RECEIVE_BUS_LIST',
                                buses: sessionStorage.setItem('buses', JSON.stringify(data)),
                                success: true
                            });
                        });
                }
                if (response.status >= 400) {
                    dispatch({ type: 'RECEIVE_BUS_LIST', success: false });

                }
            });
    }

};

export const reducer = (state, action) => {
    switch (action.type) {

        case 'EMP_LOGIN':
            return Object.assign({}, state, { activeUser: true, loading: true });
        case 'EMP_LOGIN_COMPLETE':
            if (action.activeUser) {
                return Object.assign({}, state, {
                    employee: JSON.parse(sessionStorage.getItem('emp')),
                    activeUser: true,
                    loading: false
                });
            }
            else {
                return Object.assign({}, state, {
                    activeUser: false,
                    loading: false
                });
            }
        case 'EMP_SIGNOUT':
            return Object.assign({}, state, {
                employee: action.emp,
                buses: action.buses,
                activeUser: false
            });
        case 'REG_USER':
            return Object.assign({}, state, {
                success: true
            });
        case 'REG_USER_COMPLETE':
            return Object.assign({}, state, {
                    success: false
                });
        case 'REQUEST_BUS_LIST':
            return Object.assign({}, state, { success: true });
        case 'RECEIVE_BUS_LIST':
            return Object.assign({}, state, {
                buses: JSON.parse(sessionStorage.getItem('buses')),
                success: false
            });
            
    }
    return state || defaultState;
};