import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/Navigation-Clean.css';

import {
  Collapse,
  NavbarToggler,
  Nav,
  NavItem,
   } from 'reactstrap';

export namespace NavBar {
  export interface IState {
 isOpen: boolean;
  }
}

class NavBar extends React.Component<{}, NavBar.IState> {
  state = {
      isOpen: false
    };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <nav className="navbar navbar-light navbar-expand-md navigation-clean">
          <div className="container">
            <Link className="navbar-brand" to='/'>Yannick Le Roux </Link>
            <span id="tagline" className="navbar-brand">
              <FontAwesomeIcon icon={faLaptopCode} style={{color: 'white'}}/>
              <small>  Developer in the making</small>
            </span>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="nav navbar-nav ml-auto" navbar>

                <NavItem>
                  <NavLink className="nav-link" to='/about'>About me</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/portfolio'>Portfolio</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/blog'>Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to='/contact'>Hire Me</NavLink>
                </NavItem>

              </Nav>
            </Collapse>
          </div>
        </nav>
      </header>

    );
  }
}

export default NavBar;