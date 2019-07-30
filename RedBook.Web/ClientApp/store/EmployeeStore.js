import 'isomorphic-fetch';

const defaultState = {
    employee: {},
    success: false,
    loading: false
};

export const actionCreators = {
    loadEmployee: (empId) => (dispatch) => {
        dispatch({ type: 'REQUEST_EMP' });
        const url = `api/employee/${empId}`;
        fetch(url)
            .then(response => {
                if (response.status === 200) {
                    response.json()
                        .then(data => {
                            dispatch({
                                type: 'RECEIVE_EMP',
                                employee: data, success: true
                            });
                        });
                }
                if (response.status >= 400) {
                    dispatch({ type: 'RECEIVE_EMP', success: false });
                    alert('employee not found');
                }
            });
    }
};

export const reducer = (state, action) => {
    switch (action.type) {
        case 'REQUEST_EMP':
            return Object.assign({}, state, { loading: true });
        case 'RECEIVE_EMP':
            return Object.assign({}, state, {
                employee: action.employee,
                loading: false

            });
    }
    return state || defaultState;
};