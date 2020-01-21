import React from 'react';
import { connect } from 'react-redux';
import Login from '../Login';
import { Spinner } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import * as EmployeeStore from '../../../store/EmployeeStore';

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return (

            sessionStorage.getItem('emp') != null ?
                <Redirect to={`/${this.props.employee.userInfo.role}/${this.props.employee.empId}`} />
                :
                <div>
                    <h1 className="text-center">Red Book</h1>
                    <Login />
                </div>
        );
    }
}

export default connect(state => state.employee, EmployeeStore.actionCreators)(Home);
