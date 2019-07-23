import './NavMenu.css';
import * as React from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';

export default class NavMenu extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <header>
                <Navbar className="navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light >
                    <Container>
                        <NavbarBrand tag={Link} to="/" >Norgesbuss</NavbarBrand>

                    </Container>

                </Navbar>
            </header>
        );
    }
}