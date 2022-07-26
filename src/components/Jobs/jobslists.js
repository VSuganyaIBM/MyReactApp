import React, { Component } from "react";
import Tabletop from "tabletop";
import { withRouter } from "react-router-dom";
import JobBanner from './jobBanner';


class JobsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    Tabletop.init({
      key: "1KfFAUGM0V4qXh4lEPhUMkbTEepDQCzxg75-F4IkXVkw",
      callback: (googleData) => {
        console.log("google sheet data --->", googleData);
        console.log("google sheet data --->", googleData[0].Title);

        this.setState({
          data: googleData,
        });
      },
      simpleSheet: true,
    });
  }
  viewdetail(data){
    this.props.history.push({
        pathname: '/jobdetails',
        state: {
            data
        }
    });
  }
  render() {
    const { data } = this.state;
    return (
      <div className="job-listing-area pb-120">
       <JobBanner title="Jobs" />

        <div className="container pt-100">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12">
              <section className="featured-job-area">
                <div className="container">
                  {data !== undefined && data !== null && data.length >= 1 ? (
                    data.map((item, ind) => (
                      <div className="single-job-items mb-30" key={ind}>
                        <div className="job-items">
                          <div className="job-tittle job-tittle2">
                            <h4>{item.Title}</h4>
                            <ul>
                              <li>
                                <i className="fa fa-map-marker pr-2"></i>
                                {item.Location}
                              </li>
                              <li>{item.Experience}</li>
                              <li>{item.Jobtype}</li>
                            </ul>
                          </div>
                        </div>
                        <div className="items-link items-link2 f-right">
                          <p onClick={() => this.viewdetail(item)}>View Detail</p>
                          {/* <span>7 hours ago</span> */}
                        </div>
                      </div>
                    ))
                  ) : (
                    <h1>Stay connected while we fetch latest job updates</h1>
                  )}
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(JobsList);
