import React from 'react';
import Link from 'gatsby-link';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

import Icon from './icons/Icon';
import JPLogo from '../components/icons/jp-logo-white-2.icon';

class NaviBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };

    this.toggleDropdown = this.toggleDropdown.bind(this);
  }

  toggleDropdown() {
    if (this.state.isOpen) {
      this.setState({ isOpen: false });
    }
    this.setState({ isOpen: !this.state.isOpen });
  }

  render() {
    return (
      <div className="NaviBar">
        <Navbar className="navbar fixed-top navbar-dark nav-color py-0" expand="md">
          <Container>
            <Icon id="navLogo" className="jp-logo" icon={JPLogo} width={80} height={80} fill={'#fff'} />
            <NavbarBrand>
              <Link to="/" id="navTitle" className="navbarBrand">Johannes Property</Link>
            </NavbarBrand>
            <NavbarToggler onClick={() => this.toggleDropdown()} />
            <Collapse isOpen={this.state.isOpen} navbar id="navbarDropdown" className="navItems-wrapper navbar-collapse collapse">
              <Nav className="navbar-nav ml-auto d-flex align-items-center" navbar>
                <NavItem
                  className="nav-item navItem"
                  onClick={() => this.toggleDropdown()}
                >
                  <Link className="nav-link" to="/">Home</Link>
                </NavItem>
                <NavItem
                  className="nav-item navItem"
                  onClick={() => this.toggleDropdown()}
                >
                  <Link className="nav-link" to="/property-management">Property Management</Link>
                </NavItem>
                <NavItem
                  className="nav-item navItem"
                  onClick={() => this.toggleDropdown()}
                >
                  <Link className="nav-link" to="/buying-and-selling">Buying & Selling</Link>
                </NavItem>
                <NavItem
                  className="nav-item navItem"
                  onClick={() => this.toggleDropdown()}
                >
                  <Link className="nav-link" to="/renting">Renting</Link>
                </NavItem>
                <NavItem
                  className="nav-item navItem"
                  onClick={() => this.toggleDropdown()}
                >
                  <Link className="nav-link" to="/services">Services</Link>
                </NavItem>
                <NavItem
                  className="nav-item navItem"
                  onClick={() => this.toggleDropdown()}
                >
                  <Link className="nav-link" to="/about">About Us</Link>
                </NavItem>
                <NavItem
                  className="nav-item navItem"
                  onClick={() => this.toggleDropdown()}
                >
                  <Link className="nav-link" to="/contact">Contact</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default NaviBar;
