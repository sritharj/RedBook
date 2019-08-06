import * as React from 'react';
import { connect } from 'react-redux';
//import { Form, FormGroup, Label, Input, Button, Col, Row } from 'reactstrap';
import { Button } from 'reactstrap';
import * as UserStore from '../../../store/UserStore';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

//use pass123 for password when testing
//hide pass in connection string

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            empId: '',
            pw: ''

        }

        this.test = this.test.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.regPage = this.regPage.bind(this);

    }

    handleInput(e) {
        const prop = e.target.name;
        this.setState({
            [prop]: e.target.value
        });
    }

    test(e) {
        e.preventDefault();

        this.props.userSignIn(this.state.empId, this.state.pw);
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

                        <Button color="success" block onClick={this.test}>
                            Sign In
                        </Button>
                        

                        <Grid container>
                            <Grid item xs>
                                <Button color="link" href="#" onClick={this.regPage}>
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
export default connect(state => state.user, UserStore.actionCreators)(SignIn);