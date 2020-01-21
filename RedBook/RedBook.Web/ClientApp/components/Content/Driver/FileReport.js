import * as React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import * as EmployeeStore from '../../../store/EmployeeStore';
import {
    MenuItem, Container, ExpansionPanel,
    ExpansionPanelSummary, ExpansionPanelDetails,
    Radio, RadioGroup, FormLabel, FormControlLabel
} from '@material-ui/core';
import { Button, CustomInput, Table, FormGroup, Label, Input } from 'reactstrap';
import { ExpandMore } from '@material-ui/icons';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

const date = new Date();
const styles = theme => ({
    medRadio: {
        '&$checked': {
            color: '#ffc107'
        }
    },
    highRadio: {
        '&$checked': {
            color: '#dc3545'
        }
    },
    checked: {}
})

class FileReport extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

            employeeName: props.employee.firstName + ' ' + props.employee.lastName,
            repDate: (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear(),
            busNo: '',
            priority: '',

            damages: {
                exterior: [],
                interior: [],
            },
            images: []
        }

        this.handleInput = this.handleInput.bind(this);
        this.handleImages = this.handleImages.bind(this);
        this.handleInterior = this.handleInterior.bind(this);
        this.handleExterior = this.handleExterior.bind(this);
        this.cancelRep = this.cancelRep.bind(this);
        this.sendRep = this.sendRep.bind(this);

    }

    handleInput(e) {
        const prop = e.target.name;
        
        this.setState({
            [prop]: e.target.value
        });

    }

    handleImages(e) {
        const files = [...e.target.files];
        this.setState({
            images: files
        });

        console.log(this.state);
    }

    handleExterior(ext) {
        const extIndex = this.state.damages.exterior.indexOf(ext.target.value)

        if (extIndex < 0) {
            this.state.damages.exterior.push(ext.target.value);
        } else {
            this.state.damages.exterior.splice(extIndex, 1);
        }

        this.setState({
            damages: {
                exterior: [...this.state.damages.exterior],
                interior: [...this.state.damages.interior]
            }
        })

    }

    handleInterior(i) {
        const intIndex = this.state.damages.interior.indexOf(i.target.value)

        if (intIndex < 0) {
            this.state.damages.interior.push(i.target.value);
        } else {
            this.state.damages.interior.splice(extIndex, 1);
        }

        this.setState({
            damages: {
                exterior: [...this.state.damages.exterior],
                interior: [...this.state.damages.interior]
            }
        })

    }

    sendRep(e) {
        e.preventDefault();
        var exter = this.state.damages.exterior.join(', ');
        var inter = this.state.damages.interior.join(', ');
        this.props.fileReport(this.props.employee.empId, this.state.employeeName, this.state.repDate, this.state.busNo, this.state.priority, exter, inter, null);
        //this.props.insertImage(this.props.report.reportId, this.state.images);
        
        //this.props.insertImage(2005, this.state.images);
    }

    cancelRep(e) {
        e.preventDefault();
        this.setState({
            busNo: ''
        });

        this.props.history.goBack();
    }

    render() {

        return (
            this.props.employee !== null && this.props.employee.empId == this.props.match.params.empId ?
                
                <Container maxWidth="md">
                    <ValidatorForm onSubmit={this.sendRep}>
                    <h1>File Report </h1>
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

                            <TextValidator
                                select
                                variant="outlined"
                                margin="normal"
                                fullWidth
                                id="busNo"
                                label="Bus No"
                                name="busNo"
                                onChange={this.handleInput}
                                validators={['required']}
                                errorMessages={['Bus Number required']}
                                value={this.state.busNo}
                                
                            >
                                <MenuItem value="" disabled>
                                    Bus No.
                                </MenuItem>
                                {JSON.parse(sessionStorage.getItem('buses')).map((option, idx) => (
                                    <MenuItem key={idx} value={option.busNo}>
                                        {option.busNo}
                                    </MenuItem>
                                ))}
                            </TextValidator>
                            <FormLabel component="legend">Role</FormLabel>
                            <RadioGroup
                                aria-label="Priority"
                                name="priority"
                                value={this.state.priority}
                                onChange={this.handleInput}
                                row
                            >
                                <FormControlLabel value="Medium" control={<Radio color="primary" required />} label="Medium" />
                                <FormControlLabel value="High" control={<Radio color="secondary" required />} label="High" />
                            </RadioGroup>
                            <Label for="btnUploadPh">Upload Image</Label>
                            <Input type="file" name="file" id="btnUploadPh" multiple onChange={this.handleImages} accept="image/*" />
                        </div>
                        <br />
                        <div className="card">
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
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMore />}
                                            aria-controls="panel1a-content"
                                            id="panel1a-header"
                                        >
                                            <h4>Exterior</h4>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <FormGroup>
                                            <div>
                                                <h5>Front Lights</h5>
                                                <CustomInput type="checkbox" id="frontLight1" value="Front Left Light" onChange={this.handleExterior} label="Front Left" inline />
                                                <CustomInput type="checkbox" id="frontLight2" value="Front Right Light" onChange={this.handleExterior} label="Front Right" inline />
                                                <CustomInput type="checkbox" id="frontLight3" value="Left Turn Signal" onChange={this.handleExterior} label="Left Turn Signal" inline />
                                                <CustomInput type="checkbox" id="frontLight4" value="Right Turn Signal" onChange={this.handleExterior} label="Right Turn Signal" inline />

                                                <h5>Rear Lights</h5>
                                                <CustomInput type="checkbox" id="rearLight1" value="Rear Left Light" onChange={this.handleExterior} label="Rear Left" inline />
                                                <CustomInput type="checkbox" id="rearLight2" value="Rear Right Light" onChange={this.handleExterior} label="Rear Right" inline />
                                                <CustomInput type="checkbox" id="rearLight3" value="Rear Left Turn Signal" onChange={this.handleExterior} label="Rear Left Turn Signal" inline />
                                                <CustomInput type="checkbox" id="rearLight4" value="Rear Right Turn Signal" onChange={this.handleExterior} label="Rear Right Turn Signal" inline />
                                            </div>
                                            </FormGroup>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
                                    <ExpansionPanel>
                                        <ExpansionPanelSummary
                                            expandIcon={<ExpandMore />}
                                            aria-controls="panel2a-content"
                                            id="panel2a-header"
                                        >
                                            <h4>Interior</h4>
                                        </ExpansionPanelSummary>
                                        <ExpansionPanelDetails>
                                            <div>
                                                <CustomInput type="checkbox" id="interior1" value="Passenger Seat" onChange={this.handleInterior} label="Passenger Seats" inline />
                                                <CustomInput type="checkbox" id="interior2" value="Driver's Seat" onChange={this.handleInterior} label="Driver's Seat" inline />
                                            </div>
                                        </ExpansionPanelDetails>
                                    </ExpansionPanel>
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
                        <div>
                            <Button outline color="danger" onClick={this.cancelRep} className="float-left" style={{marginTop:'2rem', marginBottom: '2rem'}}>Cancel</Button>
                            <Button type="submit" color="success" className="float-right" style={{ marginTop: '2rem', marginBottom: '2rem' }}>Submit</Button>
                        </div>
                    </ValidatorForm>
                        <br />
                            
                    </Container>
                
                :
                <Redirect to="/" />

        );

    }
}

export default connect(state => state.employee, EmployeeStore.actionCreators)(FileReport);