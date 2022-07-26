import React from "react";
import supportImg from '../../assets/support-img.jpg';


const Support = () => {
    return (
      <div className="support-company-area fix section-padding2">
      <div className="container">
          <div className="row align-items-center">
              <div className="col-xl-6 col-lg-6">
                  <div className="right-caption">
                      <div className="section-tittle section-tittle2">
                          <span>What we are doing</span>
                          <h2>24k Talented people are getting Jobs</h2>
                      </div>
                      <div className="support-caption">
                          <p className="pera-top">We work closely to bridge the gap between talent and opportunities and offers end-to-end recruitment solutions.</p>
                          <p>Werefer brings candidates and top employers under one roof by
                           accurately matching candidate profiles to the relevant job openings.                        
                          </p>
                          <a href="about.html" className="btn post-btn">Post a job</a>
                      </div>
                  </div>
              </div>
              <div className="col-xl-6 col-lg-6">
                  <div className="support-location-img">
                      <img src={supportImg} alt="support img" />
                      {/* <div className="support-img-cap text-center">
                          <p>We</p>
                          <span>Refer</span>
                      </div> */}
                  </div>
              </div>
          </div>
      </div>
  </div>
      );
}
 
export default Support;
