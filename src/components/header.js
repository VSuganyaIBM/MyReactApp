import React, { Component } from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../assets/logo.jpg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="header-area">
        <Navbar
          collapseOnSelect
          expand="sm"
          bg="light"
          variant="light"
          sticky="top"
        >
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-3 col-md-2">
                <Navbar.Brand>
                  <div className="logo">
                    <img src={logo} alt="logo" />
                  </div>
                </Navbar.Brand>
               
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              </div>

              <div className="col-lg-9 col-md-9">
                <Navbar.Collapse id="responsive-navbar-nav">
                  <Nav className="mr-auto">
                    <Link to="/">Home</Link>
                    <Link to="/aboutus">About</Link>
                    <Link to="/contact">Contact</Link>
                    <Link to="/jobs">Jobs</Link>
                  </Nav>
                </Navbar.Collapse>
              </div>
            </div>
          </div>
        </Navbar>
      </div>
    );
  }
}

export default Header;
