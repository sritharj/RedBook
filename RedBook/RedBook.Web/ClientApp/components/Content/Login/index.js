import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';
import * as EmployeeStore from '../../../store/EmployeeStore';
import { Container } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

//use pass123 for driver and pass321 for mechanic
//hide pass in connection string

class LogIn extends React.Component {
    constructor() {
        super();

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

            this.props.history.replace(`/${this.props.employee.role}/${this.props.employee.empId}`);

        }
    }

    handleInput(e) {
        const prop = e.target.name;
        this.setState({
            [prop]: e.target.value
        });
    }

    getUser() {
        this.props.authenticate(Number(this.state.empId), this.state.pw);
    }

    regPage() {
        this.props.history.push('/register');

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

                        {this.props.loading ? <Button color="primary" block disabled>
                            <Spinner
                                as="span"
                                animation="border"
                                size="sm"
                                role="status"
                                aria-hidden="true"
                            />
                            Loading...
                            </Button> :
                            <Button color="success" block type="submit">
                                Sign In
                            </Button>
                        }

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