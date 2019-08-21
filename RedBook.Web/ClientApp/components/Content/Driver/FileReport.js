import * as React from 'react';
import { connect } from 'react-redux';
import * as EmployeeStore from '../../../store/EmployeeStore';
import { TextField, MenuItem, Container } from '@material-ui/core';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

const roles = [
    {
        value: 'test',
        label: 'test'
    },
    {
        value: 'temp',
        label: 'temp'
    }
];

class FileReport extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            empName: this.props.employee.userInfo.firstName + ' ' + this.props.employee.userInfo.lastName,
            repDate: '',
            busNo: '',
            empId: this.props.employee.empId,
            value: 1

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
        console.log(this.state);
    }

    render() {

        return (
            <Container component="main" maxWidth="md">
            <div>
                <h1> File Report </h1>
                <TextField
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    id="empName"
                    label="Employee Name"
                    name="empName"
                    onChange={this.handleInput}
                    value={this.state.empName}
                    autoFocus
                />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        disableToolbar
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="repDate"
                        label="Date"
                        name="repDate"
                        onChange={this.handleInput}
                        value={this.state.repDate}
                    />
                </MuiPickersUtilsProvider>
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
                    id="empId"
                    label="Employee ID"
                    name="empId"
                    onChange={this.handleInput}
                    value={this.state.empId}
                    />
                    <div className="card text-center">
                        <div className="card-header">
                            <ul className="nav nav-pills card-header-pills">
                                <li className="nav-item">
                                    <a data-toggle="pill" className="nav-link active" href="#p1">Page 1</a>
                                </li>
                                <li className="nav-item">
                                    <a data-toggle="pill" className="nav-link" href="#p2">Page 2</a>
                                </li>
                                <li className="nav-item">
                                    <a data-toggle="pill" className="nav-link" href="#p3">Page 3</a>
                                </li>
                            </ul>
                        </div>  
                        <div className="tab-content">
                            <div id="p1" className="tab-pane fade in active">
                                <h3>HOME</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </div>
                            <div id="p2" className="tab-pane fade">
                                <h3>Menu 1</h3>
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>
                            <div id="p3" className="tab-pane fade">
                                <h3>Menu 2</h3>
                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
                </Container>
        );

    }
}

export default connect(state => state.employee, EmployeeStore.actionCreators)(FileReport);