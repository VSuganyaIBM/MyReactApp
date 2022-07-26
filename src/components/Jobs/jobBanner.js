import React from "react";

const JobBanner = (props) => {
    return (
        <div className="slider-area">
        <div className="single-slider section-overly slider-height2 d-flex align-items-center job-bg">
          <div className="container">
            <div className="row">
              <div className="col-xl-12">
                <div className="hero-cap text-center">
                  <h2>{props.title}</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
}
 
export default JobBanner;
