import * as React from 'react';
import { connect } from 'react-redux';
import * as EmployeeStore from '../../../store/EmployeeStore';

class ViewReports extends React.Component {
    constructor(props) {
        super(props);

    }

    componentDidMount() {
        this.props.employee != null ? null : this.props.history.replace('/')
    }

    render() {
        //console.log(this.props);
        return (

            <Container maxWidth="md">
                <h1> View Reports </h1>

            </Container>
        );

    }
}

export default connect(state => state.employee, EmployeeStore.actionCreators)(ViewReports);