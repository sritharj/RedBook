import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Button } from 'reactstrap';
import * as EmployeeStore from '../../../store/EmployeeStore';
import { Container, TextField, MenuItem } from '@material-ui/core';


const roles = [
    {
        value: 'Driver',
        label: 'Driver'
    },
    {
        value: 'Mechanic',
        label: 'Mechanic'
    }
];

class Register extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            empId: null,
            firstName: '',
            lastName: '',
            role: '',
            pw: '',
            confPW: ''

        }
        this.register = this.register.bind(this);
        this.handleInput = this.handleInput.bind(this);

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
        const { pw, confPW } = this.state;
        if (pw !== confPW) {
            alert("Passwords do not match");
        } else {
            this.props.register(this.state.empId, this.state.pw, this.state.firstName, this.state.lastName, this.state.role);

        }

    }

    render() {

        return (

            <Container component="main" maxWidth="xs" >
                <div>
                    <h1 className="text-center">Create an account</h1>
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="empId"
                            label="Employee ID"
                            name="empId"
                            onChange={this.handleInput}
                            autoFocus

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="firstName"
                            label="First Name"
                            name="firstName"
                            onChange={this.handleInput}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            id="lastName"
                            label="Last Name"
                            name="lastName"
                            onChange={this.handleInput}

                        />
                        <TextField
                            id="outlined-select"
                            fullWidth
                            name="role"
                            select
                            label="Role"
                            onChange={this.handleInput}
                            value={this.state.role}
                            margin="normal"
                            variant="outlined"
                            
                        >

                            {roles.map(option => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}

                        </TextField>

                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="pw"
                            label="Password"
                            type="password"
                            id="pw"
                            onChange={this.handleInput}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            fullWidth
                            name="confPW"
                            label="Confirm Password"
                            type="password"
                            id="confPW"
                            onChange={this.handleInput}

                        />

                        <Button color="success" block onClick={this.register}>
                            Register
                        </Button>

                    </form>
                </div>
            </Container>
        );
    }
}
export default withRouter(connect(state => state.employee, EmployeeStore.actionCreators)(Register));