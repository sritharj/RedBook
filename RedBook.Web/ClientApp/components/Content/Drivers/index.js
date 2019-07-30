import * as React from 'react';
import { connect } from 'react-redux';
import * as EmployeeStore from '../../../store/EmployeeStore';

class Drivers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            id: props.employee.empId || ''
        }

        this.test = this.test.bind(this);
        this.handleInput = this.handleInput.bind(this);

    }

    handleInput(e) {
        const prop = e.target.name;
        this.setState({
            [prop]: e.target.value
        });
    }

    test(e) {
        e.preventDefault();
        
        this.props.loadEmployee(this.state.id);
    }

    render() {

        return (
            <div>
                <input type="test" name="id" value={this.state.id} onChange={this.handleInput} />
                <button onClick={this.test}>Find Employee</button>
                <br />
                <p>Employee: {this.props.employee.firstName} {this.props.employee.lastName}</p>
                <p>Type: {this.props.employee.type}</p>
            </div>
        );
    }
}
export default connect(state => state.employee, EmployeeStore.actionCreators)(Drivers);