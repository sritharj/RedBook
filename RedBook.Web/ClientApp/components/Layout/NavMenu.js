import './NavMenu.css';
import * as React from 'react';
import { connect } from 'react-redux';
import * as EmployeeStore from '../../store/EmployeeStore';
import { Container, Navbar, NavbarBrand, Nav, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Button, Spinner } from 'reactstrap';

class NavMenu extends React.Component {
    constructor(props) {
        super(props);

        this.signOut = this.signOut.bind(this);
    }

    signOut() {
        this.props.signOut();
    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light >
                    <Container>
                        <NavbarBrand tag={Link} to='/'>Norgesbuss</NavbarBrand>
                        {this.props.success ? <Spinner color="dark" /> : null}
                        {this.props.employee ?
                            <Nav>
                                
                                <NavLink disabled>Welcome {this.props.employee.userInfo.firstName} {this.props.employee.userInfo.lastName}</NavLink>
                                <Button className="float-right" outline color="danger" onClick={this.signOut}>Sign Out</Button>
                            </Nav>
                            : null
                        }
                    </Container>
                </Navbar>
            </header >
        );
    }
}

export default connect(state => state.employee, EmployeeStore.actionCreators)(NavMenu);
