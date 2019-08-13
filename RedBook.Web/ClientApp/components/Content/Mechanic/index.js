import * as React from 'react';
import { connect } from 'react-redux';
import * as EmployeeStore from '../../../store/EmployeeStore';
import NotFound from '../NotFound';

class Mechanic extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (
            this.props.employee.empId ?
                <div>
                    <h1> {this.props.employee.userInfo.role} Dashboard </h1>
                    <h2> Welcome {this.props.employee.userInfo.firstName} {this.props.employee.userInfo.lastName} </h2>
                </div>
                
                :

                <NotFound />

        );

    }
}

export default connect(state => state.employee, EmployeeStore.actionCreators)(Mechanic);