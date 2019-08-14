import * as React from 'react';
import { connect } from 'react-redux';
import * as EmployeeStore from '../../../store/EmployeeStore';
import NotFound from '../NotFound';

class Mechanic extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        var empStor = JSON.parse(sessionStorage.getItem('emp'));

        return (
            empStor != null && parseInt(this.props.match.params.empId, 10) === empStor.empId ?
                <div>
                    <h1> Mechanic Dashboard </h1>
                    <h2> Welcome {empStor.userInfo.firstName} {empStor.userInfo.firstName} </h2>
                </div>
                
                :

                <NotFound />

        );

    }
}

export default connect(state => state.employee, EmployeeStore.actionCreators)(Mechanic);