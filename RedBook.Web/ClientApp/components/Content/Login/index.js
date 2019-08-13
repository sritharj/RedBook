import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
//import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import { Button } from 'reactstrap';
import * as EmployeeStore from '../../../store/EmployeeStore';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import NotFound from '../NotFound';

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

    handleInput(e) {
        const prop = e.target.name;
        this.setState({
            [prop]: e.target.value
        });
    }

    getUser(e) {
        e.preventDefault();

        this.props.authenticate(this.state.empId, this.state.pw);

        setTimeout(() => {
            { this.props.employee ? this.props.history.push(`/${this.props.employee.userInfo.role}/${this.props.employee.empId}`) : <NotFound /> }
        }, 1500);
        
    }

    regPage() {
        console.log(this.props);

    }

    /*
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
                            <Input type="text" name="p" id="pw" onChange={this.handleInput} />
                        </Col>
                    </FormGroup>
                    <FormGroup row>

                            <Button color="link float-left" onClick={this.regPage}>Create an account</Button>

                        <Col sm={2}>
                            <Button color="success float-right" onClick={this.test}>Sign In</Button>
                        </Col>
                    </FormGroup>
                </Form>

                                <Button color="link" onClick={this.regPage}>
                                    Create an account
                                </Button>

<Button type="submit" color="success" block>Sign In</Button>

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

     */

    render() {

        return (
            <Container component="main" maxWidth="xs">
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
                        

                        <Grid container>
                            <Grid item xs>
                                <Button color="link"  block onClick={this.regPage}>
                                    Create an account
                                </Button>
                            </Grid>
                        </Grid>
                    </form>
                    </div>
            </Container>

        );
    }
}
export default withRouter(connect(state => state.employee, EmployeeStore.actionCreators)(LogIn));