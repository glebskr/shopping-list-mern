import React, { Component, Fragment } from "react";
import Logout from "./auth/Logout";
import RegisterModal from "./auth/RegisterModal";
import LoginModal from "./auth/LoginModal";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container
} from "reactstrap";
import { connect } from "react-redux";

const AppNavBar: React.FC = (auth: any) => {
  const [isOpen, changeOpen] = React.useState(false);

  const toggle = (): void => {
    isOpen ? changeOpen(false) : changeOpen(true);
  };

  
  console.log(auth.auth.isAuthenticated)
  const authLinks = (
    <Fragment>
        <NavItem>
            <span className='navbar-text mr-3'>
            <strong>{auth.auth.user ? `Welcome ${auth.auth.user.name}`: '' }</strong>
            </span>
        </NavItem>
      <NavItem>
        <Logout />
      </NavItem>
    </Fragment>
  );

  const guestlinks = (
    <Fragment>
      <NavItem>
        <LoginModal />
      </NavItem>
      <NavItem>
        <RegisterModal />
      </NavItem>
    </Fragment>
  );
  return (
    <div>
      <Navbar color="dark" dark expand="sm" className="mb-5">
        <Container>
          <NavbarBrand href="/">Shopping List</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              {auth.auth.isAuthenticated ? authLinks : guestlinks}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, null)(AppNavBar);
