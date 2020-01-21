import * as React from 'react';
import { withRouter } from 'react-router-dom';
import Layout from './Layout';
import Routes from './Routing';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Layout location={this.props.location}>
                <Routes />
            </Layout>
        );

    }
}

export default withRouter(App);