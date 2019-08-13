import * as React from 'react';
import { connect } from 'react-redux';
import * as EmployeeStore from '../../../store/EmployeeStore';
import NotFound from '../NotFound';
import { DescriptionOutlined, FolderOpenOutlined} from '@material-ui/icons';
import { Card, CardTitle } from 'reactstrap'

class Driver extends React.Component {
    constructor(props) {
        super(props);

    }


    render() {
        return (
            this.props.employee.empId ?
                <div>
                    <h1> {this.props.employee.userInfo.role} Dashboard </h1>
                    <h2> Welcome {this.props.employee.userInfo.firstName} {this.props.employee.userInfo.lastName} </h2>
                    <br />

                    <div className="row justify-content-md-center">
                        <div className="col-md-3">
                                <Card body inverse className="text-center" style={{ backgroundColor: '#333', borderColor: '#333' }}>
                                    <CardTitle>
                                        <DescriptionOutlined style={{ fontSize: 60 }}/>
                                        <h2 className="card-title">File Report</h2>
                                    </CardTitle>
                                </Card>
                        </div>
                        <div className="col-md-3">
                            <a href="#">
                                <div className="card text-center">
                                    <div className="card-body">
                                    <FolderOpenOutlined style={{ fontSize: 60 }} />
                                        <h2 className="card-title">View Today's Reports</h2>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                :

                <NotFound />

        );

    }
}

export default connect(state => state.employee, EmployeeStore.actionCreators)(Driver);