import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Redirect } from 'react-router';
//import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import { Button } from 'reactstrap';
import * as EmployeeStore from '../../../store/EmployeeStore';
import { Container, TextField } from '@material-ui/core';
import Driver from '../Driver';
//import { Modal, ModalHeader, ModalBody } from 'reactstrap';
//import TextField from '@material-ui/core/TextField';
//import Grid from '@material-ui/core/Grid';

//use pass123 for password when testing
//hide pass in connection string

class LogIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            empId: null,
            pw: ''

        }

        this.getUser = this.getUser.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.regPage = this.regPage.bind(this);

    }

    componentDidUpdate(prevProps) {
        if (this.props.employee !== prevProps.employee) {

            this.props.employee ? this.props.history.push(`/${this.props.employee.userInfo.role}/${this.props.employee.empId}`) : null

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
        console.log(this.props);

    }

    render() {

        return (
            sessionStorage.length == 0 ?
            <Container component="main" maxWidth="xs" >
                <div>
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
                            name="pw"
                            label="Password"
                            type="password"
                            id="pw"
                            onChange={this.handleInput}

                        />

                        <Button color="success" block onClick={this.getUser}>
                            Sign In
                        </Button>
                        <br />
                        <Button color="link" block onClick={this.regPage}>
                            Create an account
                        </Button>

                    </form>
                </div>
            </Container>
                :
                <Driver />
        );
    }
}
export default withRouter(connect(state => state.employee, EmployeeStore.actionCreators)(LogIn));