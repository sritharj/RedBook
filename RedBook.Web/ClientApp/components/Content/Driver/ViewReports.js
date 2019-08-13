import * as React from 'react';
import { connect } from 'react-redux';
import * as EmployeeStore from '../../../store/EmployeeStore';

class ViewReports extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {

        return (

            <div>
                <h1> Viewing Reports </h1>
            </div>
        );

    }
}

export default connect(state => state.employee, EmployeeStore.actionCreators)(ViewReports);