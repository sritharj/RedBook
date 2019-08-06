import 'isomorphic-fetch';

const defaultState = {
    user: {},
    success: false,
    loading: false
}

export const actionCreators = {
    userSignIn: (empId, password) => (dispatch) => {
        const req = { empId: empId, password: password }

        const obj = Object.assign({}, req);
        dispatch({ type: 'SIGNIN_REQUEST_EMP' });
        const url = `api/user/${req.empId}`;
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj)
        })
            .then(response => {
                if (response.status === 200) {


                    dispatch({
                        type: 'SIGNIN_RECEIVE_EMP',
                        user: req, success: true
                    });

                }
                if (response.status >= 400) {
                    dispatch({ type: 'SIGNIN_RECEIVE_EMP', success: false });
                    alert('login failed');
                }

            });
    }
}

export const reducer = (state, action) => {
    switch (action.type) {
        case 'SIGNIN_REQUEST_EMP':
            return Object.assign({}, state, { success: true });
        case 'SIGNIN_RECEIVE_EMP':
            return Object.assign({}, state, {
                user: action.req,
                success: false

            });
    }
    return state || defaultState;
}