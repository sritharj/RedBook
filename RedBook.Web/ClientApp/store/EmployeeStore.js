import 'isomorphic-fetch';

const defaultState = {
    employee: {},
    success: false,
    loading: false
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
                                emp: data, success: true
                            });
                        });


                }
                if (response.status >= 400) {
                    dispatch({ type: 'EMP_LOGIN_COMPLETE', emp: null, success: false });
                    alert('Login Failed. Please Try Again');
                }

            }).catch(err => {
                dispatch({ type: 'EMP_LOGIN_COMPLETE', success: false });
                if (/NetworkError/i.test(err)) {
                    alert('A network error has occurred - data was not saved.Refresh this page and try again.');
                }
            });
    }

};

export const reducer = (state, action) => {
    switch (action.type) {


        case 'EMP_LOGIN':
            return Object.assign({}, state, { success: true });
        case 'EMP_LOGIN_COMPLETE':
            return Object.assign({}, state, {
                employee: action.emp,
                success: false

            });

    }
    return state || defaultState;
};