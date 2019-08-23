import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as EmployeeStore from '../../../store/EmployeeStore';
import { TextField, MenuItem, Container } from '@material-ui/core';
import { Table } from 'reactstrap';

const bus = [
    {
        value: '001',
        label: 'Bus 001'
    },
    {
        value: '002',
        label: 'Bus 002'
    }
];

const d = new Date();

class FileReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

            repDate: (d.getMonth()+1) + '/' + d.getDate() + '/' + d.getFullYear(),
            busNo: ''

        }

        this.handleInput = this.handleInput.bind(this);

    }

    componentDidMount() {
        this.props.employee != null ? null : this.props.history.replace('/')
        
        
    }

    handleInput(e) {
        const prop = e.target.name;
        this.setState({
            [prop]: e.target.value
        });
        console.log(this.props.buses);
    }

    render() {
        
        return (
            this.props.employee != null ?

                <Container maxWidth="md">

                    <h1> File Report </h1>
                    <br />
                    <div className="col-md-6">
                        <Table borderless>
                            <tbody>
                                <tr>
                                    <th scope="row">Employee ID</th>
                                    <td>{this.props.employee.empId}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Employee Name</th>
                                    <td>{this.props.employee.userInfo.firstName} {this.props.employee.userInfo.lastName}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Date</th>
                                    <td>{this.state.repDate}</td>
                                </tr>
                            </tbody>
                        </Table>
                        <Container maxWidth="xs">
                        <TextField
                            id="outlined-select"
                            fullWidth
                            name="busNo"
                            select
                            label="Bus No."
                            onChange={this.handleInput}
                            value={this.state.busNo}
                            margin="normal"
                            variant="outlined"
                        >

                            {JSON.parse(sessionStorage.getItem('buses')).map((option, idx) => (
                                <MenuItem key={idx} value={option.busNo}>
                                    {option.busNo}
                                </MenuItem>
                            ))}

                            </TextField></Container>

                    </div>
                    <br />
                    <div className="card text-center">
                        <div className="card-header">
                            <ul className="nav nav-pills card-header-pills">
                                <li className="nav-item">
                                    <a data-toggle="pill" className="nav-link active" href="dmg">Damage</a>
                                </li>
                                <li className="nav-item">
                                    <a data-toggle="pill" className="nav-link" href="#cln">Cleaning</a>
                                </li>
                                <li className="nav-item">
                                    <a data-toggle="pill" className="nav-link" href="#tech">Technical</a>
                                </li>
                            </ul>
                        </div>
                        <div className="tab-content card-body">
                            <div id="dmg" className="tab-pane fade in active show">
                                <h3>Damage</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div id="cln" className="tab-pane fade">
                                <h3>Cleaning</h3>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div id="tech" className="tab-pane fade">
                                <h3>Technical</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                    </div>



                </Container>

                :
                <Redirect to='/' />
        );

    }
}

export default connect(state => state.employee, EmployeeStore.actionCreators)(FileReport);