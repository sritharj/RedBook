import 'isomorphic-fetch';
import history from '../Helper/history';

const defaultState = {
    employee: JSON.parse(sessionStorage.getItem('emp')),
    report: {},
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
        dispatch({ type: 'REG_USER' });
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
                    history.push('/');
                }
                if (response.status >= 400) {
                    dispatch({ type: 'REG_USER_COMPLETE', success: false });
                    alert('Error, registration failed');
                    history.push('/register');
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
    },

    fileReport: (empId, employeeName, date, busNo, priority, exteriorDamage, interiorDamage, maintenance) => (dispatch) => {
        const req = { empId: empId, employeeName: employeeName, date: date, busNo: busNo, priority: priority, exteriorDamage: exteriorDamage, interiorDamage: interiorDamage, maintenance: maintenance };

        const obj = Object.assign({}, req);
        dispatch({ type: 'FILE_REPORT', req: req });
        const url = `api/report/insert`;
        fetch(url, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(data => {
                            dispatch({ type: 'FILE_REPORT_COMPLETE', req: data, success: true });
                        })
                    
                }
                if (response.status >= 400) {
                    dispatch({ type: 'FILE_REPORT_COMPLETE', success: false });
                    alert('Error could not submit');
                }
            }).catch(err => {
                dispatch({ type: 'FILE_REPORT_COMPLETE', success: false });
                if (/NetworkError/i.test(err)) {
                    alert('A network error has occurred - data was not saved. Refresh this page and try again.');
                }
            });
    },

    insertImage: (reportId, files) => (dispatch) => {
        const formData = new FormData();
        files.forEach((f) => formData.append('files', f));
        formData.append('reportId', reportId);

        dispatch({ type: 'IMAGE_INSERT', reportId: reportId, files: files });
        fetch(`api/report/insert/image`, {
            method: 'POST',
            body: formData
        }).then(response => {
            if (response.status === 200) {
                response.json()
                    .then(data => {
                        dispatch({ type: 'IMAGE_INSERT_COMPLETE', reportId: reportId, files: data, success: true });
                    });
            }
            if (response.status >= 400) {
                dispatch({ type: 'IMAGE_INSERT_COMPLETE', reportId: reportId, success: false });
                alert('Image upload failed');
            }
            }).catch(err => {
                dispatch({ type: 'IMAGE_INSERT_COMPLETE', success: false });
                if (/NetworkError/i.test(err)) {
                    alert('A network error has occurred - data was not saved. Refresh this page and try again.');
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

        case 'FILE_REPORT':
            return Object.assign({}, state, { success: true });

        case 'FILE_REPORT_COMPLETE':

                if (action.success) {
                    return Object.assign({}, state, { report: action.req, success: false });

                }
            return Object.assign({}, state, { success: false });

        case 'INSERT_IMAGE':
            return Object.assign({}, state, { success: true });

        case 'INSERT_IMAGE_COMPLETE':
            if (action.success) {
                reportId: action.reportId
            }
            return Object.assign({}, state, { success: false });

    }
    return state || defaultState;
};