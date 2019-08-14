import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as EmployeeStore from '../../../store/EmployeeStore';
import NotFound from '../NotFound';
import { DescriptionOutlined, FolderOpenOutlined } from '@material-ui/icons';
import { Card, CardTitle } from 'reactstrap'

class Driver extends React.Component {
    constructor(props) {
        super(props);

        this.test = this.test.bind(this);
    }

    test() {

        this.props.history.push(`${this.props.history.location.pathname}/ViewReports`);
    }

    render() {

        //console.log(this.props.match.params.empId);
        //var empStor = JSON.parse(sessionStorage.getItem('emp'));
        //console.log(this.props)

        return (
            
            this.props.employee != null && parseInt(this.props.match.params.empId, 10) === this.props.employee.empId ?
                <div>
                    <h1> Driver Dashboard </h1>
                    <h2> Welcome </h2>
                    <br />

                    <div className="row justify-content-md-center">
                        <div className="col-md-3">
                            <Card body onClick={this.test}>
                                <CardTitle className="text-center">
                                    <DescriptionOutlined />
                                    <h2 style={{marginTop: '3rem'}}>File Report</h2>
                                </CardTitle>
                            </Card>
                        </div>

                        <div className="col-md-3">
                            <Card body>
                                <CardTitle className="text-center">
                                    <FolderOpenOutlined />
                                    <h2 style={{ marginTop: '3rem' }}>View Reports</h2>
                                </CardTitle>
                            </Card>
                        </div>
                    </div>
                </div>

                :

                <NotFound />

        );

    }
}

export default withRouter(connect(state => state.employee, EmployeeStore.actionCreators)(Driver));