import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

import DailyChart from "../containers/DailyChartContainer";

class MainContainer extends Component {

  render() {
    return (
      <div>
        <DailyChart stockCode={this.props.match.params.code} />
      </div>
    );
  }
}

export default MainContainer;
