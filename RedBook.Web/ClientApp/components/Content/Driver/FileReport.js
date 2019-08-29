import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as EmployeeStore from '../../../store/EmployeeStore';
import { MenuItem, Container, Select, OutlinedInput } from '@material-ui/core';
import { Button } from 'reactstrap';
import { ExpandMore } from '@material-ui/icons';
import { Table } from 'reactstrap';

const d = new Date();


class FileReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            repDate: (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear(),
            busNo: ''

        }

        this.handleInput = this.handleInput.bind(this);
        this.cancelRep = this.cancelRep.bind(this);
        this.sendRep = this.sendRep.bind(this);

    }

    handleInput(e) {
        const prop = e.target.name;
        this.setState({
            [prop]: e.target.value
        });

    }

    sendRep() {
        console.log(this.state);
    }

    cancelRep() {
        console.log('cancelling');
    }

    render() {

        return (
            this.props.employee !== null && this.props.employee.empId == this.props.match.params.empId ?

                <Container maxWidth="md">

                    <h1> File Report </h1>
                    <br />
                    <div className="col-md-6">
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <td scope="row">Employee ID</td>
                                    <td>{this.props.employee.empId}</td>
                                </tr>
                                <tr>
                                    <td scope="row">Employee Name</td>
                                    <td>{this.props.employee.userInfo.firstName} {this.props.employee.userInfo.lastName}</td>
                                </tr>
                                <tr>
                                    <td scope="row">Date</td>
                                    <td>{this.state.repDate}</td>
                                </tr>
                            </tbody>
                        </Table>
                    </div>


                    <div className="col-md-6">
                        <h5>Select Bus:</h5>
                        <Select
                            fullWidth
                            displayEmpty
                            value={this.state.busNo}
                            onChange={this.handleInput}
                            IconComponent={ExpandMore}
                            input={<OutlinedInput name="busNo" id="filled-bus-simple" />}
                        >
                            <MenuItem value="" disabled>
                                Bus No.
                            </MenuItem>
                            {JSON.parse(sessionStorage.getItem('buses')).map((option, idx) => (
                                <MenuItem key={idx} value={option.busNo}>
                                    {option.busNo}
                                </MenuItem>
                            ))}

                        </Select>

                    </div>
                    <br />
                    <div className="card text-center">
                        <div className="card-header">
                            <ul className="nav nav-pills card-header-pills">
                                <li className="nav-item">
                                    <a data-toggle="pill" className="nav-link active" href="#dmg">Damage</a>
                                </li>
                                <li className="nav-item">
                                    <a data-toggle="pill" className="nav-link" href="#mnt">Maintenance</a>
                                </li>
                                <li className="nav-item">
                                    <a data-toggle="pill" className="nav-link" href="#tech">Cleaning</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content card-body">
                            <div id="dmg" className="tab-pane fade in active show">
                                <h3>Damage</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div id="mnt" className="tab-pane fade">
                                <h3>Maintenance</h3>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div id="tech" className="tab-pane fade">
                                <h3>Technical</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                    </div>
                    <br />
                    <Button outline color="danger" onClick={this.cancelRep} className="float-left">Cancel</Button>
                    <Button color="success" onClick={this.sendRep} className="float-right" >Submit</Button>
                </Container>
                :
                <Redirect to="/" />

        );

    }
}

export default connect(state => state.employee, EmployeeStore.actionCreators)(FileReport);