import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import * as EmployeeStore from '../../../store/EmployeeStore';

class ViewReports extends React.Component {
    constructor() {
        super();

    }

    render() {

        return (
            this.props.employee !== null && this.props.employee.empId == this.props.match.params.empId ?

            <Container maxWidth="md">
                <h1> View Reports </h1>
            </Container>
                :
            <Redirect to="/" />
        );

    }
}

export default connect(state => state.employee, EmployeeStore.actionCreators)(ViewReports);