import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import * as EmployeeStore from '../../../store/EmployeeStore';
import { DescriptionOutlined, FolderOpenOutlined } from '@material-ui/icons';
import { Container } from '@material-ui/core';
import { Card, CardTitle } from 'reactstrap';

class Driver extends React.Component {
    constructor(props) {
        super(props);

        this.fileRep = this.fileRep.bind(this);
        this.viewRep = this.viewRep.bind(this);
    }

    componentDidMount() {
        if (sessionStorage.getItem('buses') === null) {
            this.props.loadBuses();
        }
        console.log(this.props);
    }

    fileRep() {
        this.props.history.push(`${this.props.match.url}/FileReport`);

    }

    viewRep() {
        this.props.history.push(`${this.props.match.url}/ViewReports`);

    }

    render() {

        return (
            this.props.employee != null && this.props.employee.empId === parseInt(this.props.match.params.empId, 10) ?
                <Container maxWidth="md">
                    <h1> Driver Dashboard </h1>

                    <br />

                    <div className="row justify-content-md-center">
                        
                        <Card id="btnFile" body outline color="primary" onClick={this.fileRep}>
                            <CardTitle className="text-center">
                                <DescriptionOutlined style={{ fontSize: '100px' }} />
                                <h3>File Report</h3>
                            </CardTitle>
                        </Card>

                        <Card id="btnView" body outline color="primary" onClick={this.viewRep}>
                            <CardTitle className="text-center">
                                <FolderOpenOutlined style={{ fontSize: '100px' }} />
                                    <h3>View Reports</h3>
                            </CardTitle>
                        </Card>
                    </div>

                </Container>
                :
                <Redirect to='/' />
        );

    }
}

export default withRouter(connect(state => state.employee, EmployeeStore.actionCreators)(Driver));