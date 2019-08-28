﻿import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import * as EmployeeStore from '../../../store/EmployeeStore';
import { Container } from '@material-ui/core';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';


class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            empId: '',
            firstName: '',
            lastName: '',
            role: '',
            pw: '',
            confPW: ''

        }
        this.register = this.register.bind(this);
        this.handleInput = this.handleInput.bind(this);

    }

    componentDidMount() {
        ValidatorForm.addValidationRule('isPasswordMatch', (value) => {
            if (value !== this.state.pw) {
                return false;
            }
            return true;
        });
    }

    componentWillUnmount() {
        ValidatorForm.removeValidationRule('isPasswordMatch');
    }

    componentDidUpdate(prevProps) {
        if (this.props.success !== prevProps.success) {
            this.props.history.push('/');

        }
    }

    handleInput(e) {
        const prop = e.target.name;
        this.setState({
            [prop]: e.target.value
        });
    }

    register() {
        this.props.register(this.state.empId, this.state.pw, this.state.firstName, this.state.lastName, this.state.role);

    }

    render() {

        return (

            <Container component="main" maxWidth="xs" >
                <div>
                    <h1 className="text-center">Create an account</h1>
                    <ValidatorForm onSubmit={this.register}>
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
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            onChange={this.handleInput}
                            validators={['required']}
                            errorMessages={['First Name required']}
                            value={this.state.firstName}

                        />
                        <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            onChange={this.handleInput}
                            validators={['required']}
                            errorMessages={['Last Name required']}
                            value={this.state.lastName}
                            

                        />
                        <FormLabel component="legend">Role</FormLabel>
                        <RadioGroup
                            aria-label="Role"
                            name="role"
                            value={this.state.role}
                            onChange={this.handleInput}
                            row
                        >
                            <FormControlLabel value="Driver" control={<Radio color="primary" required />} label="Driver" />
                            <FormControlLabel value="Mechanic" control={<Radio color="primary" required/>} label="Mechanic" />
                        </RadioGroup>

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
                        <TextValidator
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="confPW"
                            label="Confirm Password"
                            type="password"
                            id="confPW"
                            onChange={this.handleInput}
                            validators={['isPasswordMatch', 'required']}
                            errorMessages={['Passwords do not match', 'Password confirmation required']}
                            value={this.state.confPW}

                        />

                        <Button color="success" block type="submit">
                            Register
                        </Button>

                    </ValidatorForm>
                </div>
            </Container>
        );
    }
}
export default withRouter(connect(state => state.employee, EmployeeStore.actionCreators)(Register));