import * as React from 'react';
import NavMenu from './NavMenu';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../css/style.css';

export default class Layout extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div>
                <NavMenu />
                <div className="container-fluid">

                    <div className="col">
                        {this.props.children}
                    </div>
                </div>
            </div>

        );
    }
}
