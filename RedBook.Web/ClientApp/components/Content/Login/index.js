import * as React from 'react';
import { connect } from 'react-redux';
import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import * as EmployeeStore from '../../../store/EmployeeStore';

class Drivers extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            empId: props.employee.empId || '',
            pw: props.employee.pw || ''

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
        console.log(this.state);

        //this.props.loadEmployee(this.state.empId);
    }

    render() {

        return (
            <div>
                <Form>
                    <FormGroup row>
                        <Label for="empId" sm={1}>Employee ID</Label>
                        <Col sm={2}>
                            <Input type="text" name="empId" id="empId" onChange={this.handleInput} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label for="pw" sm={1}>Password</Label>
                        <Col sm={2}>
                            <Input type="password" name="pw" id="pw" onChange={this.handleInput} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Col sm={1}>
                            <a href='a'>Create an account</a>
                        </Col>
                        <Col sm={2}>
                            <Button color="success float-right" onClick={this.test}>Sign In</Button>
                        </Col>
                    </FormGroup>
                </Form>
            </div>
        );
    }
}
export default connect(state => state.employee, EmployeeStore.actionCreators)(Drivers);