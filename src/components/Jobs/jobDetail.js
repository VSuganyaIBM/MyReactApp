import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import JobBanner from './jobBanner';


class JobDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    console.log(this.props.location);
    if (
      this.props.location.state !== null &&
      this.props.location.state.data !== null &&
      this.props.location.state.data !== undefined
    )
      this.setState({
        data: this.props.location.state.data,
      });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="werefer-jobdetail">
       <JobBanner title="Job Description" />

        <div className="job-post-company pt-120 pb-120">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-xl-7 col-lg-8 left-content">
                <div className="single-job-items mb-40 mt-30">
                  <div className="job-items">
                    <div className="job-tittle">
                      <h4>{data.Title}</h4>
                      <ul>
                        <li>
                          <i className="fa fa-map-marker pr-5"></i>{data.Location}
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="job-post-details">
                  <div className="post-details2  mb-50">
                    <div className="small-section-tittle">
                      <h4>Required Knowledge, Skills, and Abilities</h4>
                    </div>
                      <p>{data.Requirements}</p>
                  </div>
                  <hr/>
                  <div className="post-details2  mb-50">
                    <div className="small-section-tittle">
                      <h4>Roles & Responsibilities</h4>
                    </div>
                    <p>{data.Rolesandresponsibilities}</p>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 col-lg-4">
                <div className="post-details3  mb-50">
                  <div className="small-section-tittle">
                    <h4>Job Overview</h4>
                  </div>
                  <ul>
                    <li>
                      Posted date : <span>{data.PostedOn}</span>
                    </li>
                    <li>
                      Location : <span>{data.Location}</span>
                    </li>
                    <li>
                      Vacancy : <span>{data.Vacancy}</span>
                    </li>
                    <li>
                      Job nature : <span>{data.Jobtype}</span>
                    </li>
                  </ul>
                  {/* <div className="apply-btn2">
                    <a href="#" className="btn">
                      Apply Now
                    </a>
                  </div> */}
                </div>
                <div className="post-details4  mb-50">
                  <div className="small-section-tittle">
                    <h4>Contact Information</h4>
                  </div>
                  <span>Werefer</span>
                  <p>
                    Send your updated resume to us if the job description suits you
                  </p>
                  <ul>
                    <li>
                      Email: <span>careers.werefer.co.in</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(JobDetail);
