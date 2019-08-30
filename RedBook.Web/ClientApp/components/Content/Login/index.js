import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import * as EmployeeStore from '../../../store/EmployeeStore';
import { Container } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

//use pass123 for password when testing
//hide pass in connection string

class LogIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            empId: '',
            pw: ''

        }

        this.getUser = this.getUser.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.regPage = this.regPage.bind(this);

    }

    componentDidUpdate(prevProps) {
        if (this.props.employee !== prevProps.employee) {

            this.props.history.replace(`/${this.props.employee.userInfo.role}/${this.props.employee.empId}`);

        }
    }
    
    handleInput(e) {
        const prop = e.target.name;
        this.setState({
            [prop]: e.target.value
        });
    }

    getUser() {
        this.props.authenticate(this.state.empId, this.state.pw);
    }

    regPage() {
        this.props.history.push('/Register');

    }

    render() {

        return (

            <Container component="main" maxWidth="xs" >
                <div>
                    <ValidatorForm onSubmit={this.getUser}>
                        <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="empId"
                            label="Employee ID"
                            name="empId"
                            onChange={this.handleInput}
                            validators={['required']}
                            errorMessages={['Employee ID required']}
                            value={this.state.empId}
                            autoFocus

                        />

                        <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="pw"
                            label="Password"
                            type="password"
                            id="pw"
                            onChange={this.handleInput}
                            validators={['required']}
                            errorMessages={['Password required']}
                            value={this.state.pw}

                        />

                        <Button color="success" block type="submit">
                            Sign In
                        </Button>
                        <br />

                    </ValidatorForm>
                    
                    <Button color="link" block onClick={this.regPage}>
                        Create an account
                    </Button>
                </div>
            </Container>
        );
    }
}
export default withRouter(connect(state => state.employee, EmployeeStore.actionCreators)(LogIn));