import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./header";
import Footer from "./footer";
import Home from "./Home/home";
import About from "./About/about";
import Contact from "./Contact/contactus";
import Jobs from "./Jobs/jobs";
import JobDetails from "./Jobs/jobDetail";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        {/* <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle"></div>
              <div className="preloader-img pere-text">
                <img src={logo} alt="logo" />
              </div>
            </div>
          </div>
        </div> */}
        <Header />
        <Switch>
          <Route path={"/"} exact>
            <Home />
          </Route>
          <Route path={"/aboutus"}>
            <About />
          </Route>
          <Route path={"/contact"} component={Contact} />
          <Route path={"/jobs"} component={Jobs} />
          <Route path={"/jobdetails"} component={JobDetails} />

        </Switch>
      
        <Footer />
      </React.Fragment>
    );
  }
}

export default Main;
