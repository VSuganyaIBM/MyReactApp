import React, { Component } from "react";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <footer>
          <div className="footer-area footer-bg footer-padding">
            <div className="container">
              <div className="row d-flex justify-content-between">
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-6">
                  <div className="single-footer-caption mb-50">
                    <div className="single-footer-caption mb-30">
                      <div className="footer-tittle">
                        <h4>About Us</h4>
                        <div className="footer-pera">
                          <p>
                            Werefer connects jobseekers and recruiters by accurately matching candidate profiles to the relevant job openings.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Contact Info</h4>
                      <ul>
                        <li>
                          <p>Phone : +91</p>
                        </li>
                        <li>
                          <p>Email : info@werefer.co.in</p>
                        </li>
                        <li>
                          <p>careers@werefer.co.in</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-4 col-lg-4 col-md-4 col-sm-5">
                  <div className="single-footer-caption mb-50 footer-social-media">
                    <div className="footer-tittle">
                      <h4>Important Link</h4>
                      <ul id="services">
                        <li className={"ml-0"}>
                          <div className="facebook">
                            <a href="#" rel="noopener noreferrer" target="_blank">
                              <i className="fa fa-facebook" aria-hidden="true"></i>
                            </a>
                          </div>
                          <span>Facebook</span>
                        </li>
                        <li>
                          <div className="linkedin">
                            <a href="#">
                              <i className="fa fa-linkedin" aria-hidden="true"></i>
                            </a>
                          </div>
                          <span>LinkedIn</span>
                        </li>
                        <li>
                          <div className="instagram">
                            <a href="#">
                              <i className="fa fa-instagram" aria-hidden="true"></i>
                            </a>
                          </div>
                          <span>Instagram</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </React.Fragment>
    );
  }
}

export default Footer;
