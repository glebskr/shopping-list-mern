import React, { Component } from 'react';

import RegisterModal from './auth/RegisterModal'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container    
} from 'reactstrap';



const AppNavBar: React.FC = () => {
    
    const [isOpen, changeOpen] = React.useState(false);

    const toggle = () : void => {
        isOpen ? changeOpen(false) : changeOpen(true)
    }

    return (
        <div>
            <Navbar color="dark" dark expand="sm" clasName="mb-5">
                <Container>
                    <NavbarBrand href='/'>Shopping List</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar >
                        <Nav clasName="ml-auto" navbar>
                            <NavItem>
                                <RegisterModal />                              
                            </NavItem>    
                        </Nav>   
                    </Collapse>

                </Container>
            </Navbar>
        </div>
    )
}

export default AppNavBar