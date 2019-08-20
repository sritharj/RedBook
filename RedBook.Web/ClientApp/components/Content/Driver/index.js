import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import * as EmployeeStore from '../../../store/EmployeeStore';
import { DescriptionOutlined, FolderOpenOutlined } from '@material-ui/icons';
import { Container } from '@material-ui/core';
import { Card, CardTitle, Button } from 'reactstrap';

class Driver extends React.Component {
    constructor(props) {
        super(props);

        this.fileRep = this.fileRep.bind(this);
        this.viewRep = this.viewRep.bind(this);
        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        this.props.signOut();
    }

    fileRep() {
        this.props.history.push(`${this.props.match.url}/FileReport`);
    }

    viewRep() {
        this.props.history.push(`${this.props.match.url}/ViewReports`);

    }

    render() {

        return (
            this.props.employee != null ?
                <div>

                    <Button className="float-right" outline color="danger" onClick={this.signOut}>
                        Sign Out
                        </Button>
                    <h1> Driver Dashboard </h1>

                    <h2> Welcome {this.props.employee.userInfo.firstName} {this.props.employee.userInfo.lastName}</h2>

                    <br />

                    <div className="row justify-content-md-center">
                        <div className="col-md-3">
                            <Card body onClick={this.fileRep}>
                                <CardTitle className="text-center">
                                    <DescriptionOutlined style={{ fontSize: '100px' }} />
                                    <h2 style={{ marginTop: '3rem' }}>File Report</h2>
                                </CardTitle>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card body onClick={this.viewRep}>
                                <CardTitle className="text-center">
                                    <FolderOpenOutlined style={{ fontSize: '100px' }} />
                                    <h2 style={{ marginTop: '3rem' }}>View Reports</h2>
                                </CardTitle>
                            </Card>
                        </div>
                    </div>

                </div>
                :
                <Redirect to='/' />
        );

    }
}

export default withRouter(connect(state => state.employee, EmployeeStore.actionCreators)(Driver));