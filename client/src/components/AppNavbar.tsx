import React, { Component } from 'react';


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
                                <NavLink href="https://github.com">
                                    Github    
                                </NavLink>                                
                            </NavItem>    
                        </Nav>   
                    </Collapse>

                </Container>
            </Navbar>
        </div>
    )
}

export default AppNavBar