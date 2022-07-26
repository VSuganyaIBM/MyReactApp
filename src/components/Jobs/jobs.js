import React, { Component } from "react";
import JobList from './jobslists';

class Jobs extends Component {
  constructor(props) {
    super(props);
    this.state = {
        
    };
  }
 
  render() {
    return (
    <div className="werefer-jobs">
       <JobList />
    </div>
    );
  }
}

export default Jobs;
