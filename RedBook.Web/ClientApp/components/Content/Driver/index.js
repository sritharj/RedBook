import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter, Redirect } from 'react-router-dom';
import * as EmployeeStore from '../../../store/EmployeeStore';
import { DescriptionOutlined, FolderOpenOutlined } from '@material-ui/icons';
import { Card, CardTitle } from 'reactstrap';

class Driver extends React.Component {
    constructor(props) {
        super(props);

        this.fileRep = this.fileRep.bind(this);
        this.viewRep = this.viewRep.bind(this);
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
                    <h1> Driver Dashboard </h1>

                    <br />

                    <div className="row justify-content-md-center">
                        <div className="col-md-3">
                            <Card body className="text-dark bg-light"onClick={this.fileRep}>
                                <CardTitle className="text-center">
                                    <DescriptionOutlined style={{ fontSize: '100px' }} />
                                    <h2>File Report</h2>
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