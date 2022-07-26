import React, { Component } from "react";
import { Link } from "react-router-dom";

import logo from "../assets/logo.jpg";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="header-area header-transparrent">
            <div className="headder-top header-sticky">
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-lg-3 col-md-2">
                    <div className="logo">
                      <img src={logo} alt="logo" />
                    </div>
                  </div>
                  <div className="col-lg-9 col-md-9">
                    <div className="menu-wrapper">
                      <div className="main-menu">
                        <nav className="d-none d-lg-block">
                          <ul id="navigation">
                            <li>
                              <Link to="/">Home</Link>
                            </li>
                            <li>
                              <Link to="/aboutus">About</Link>
                            </li>
                            <li>
                              <Link to="/contact">Contact</Link>
                            </li>
                            <li>
                              <Link to="/jobs">Jobs</Link>
                            </li>
                          </ul>
                        </nav>
                      </div>
                      {/* <div className="header-btn d-none f-right d-lg-block">
                        <a href="#" className="btn head-btn1">
                          Register
                        </a>
                        <a href="#" className="btn head-btn2">
                          Login
                        </a>
                      </div> */}
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="mobile_menu d-block d-lg-none"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
