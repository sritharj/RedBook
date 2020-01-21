import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Container } from '@material-ui/core';
import * as EmployeeStore from '../../../store/EmployeeStore';

class Mechanic extends React.Component {
    constructor() {
        super();

    }

    render() {

        return (
            this.props.employee !== null && this.props.employee.empId === parseInt(this.props.match.params.empId, 10) ?
                <Container maxWidth="md">
                    <h1> Mechanic Dashboard </h1>
                </Container>
                
                :

                <Redirect to='/' />

        );

    }
}

export default connect(state => state.employee, EmployeeStore.actionCreators)(Mechanic);