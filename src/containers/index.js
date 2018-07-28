import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';

import IntradayChart from '../containers/IntradayChartContainer';

class MainContainer extends Component {

  render() {
    return (
      <div>
        <IntradayChart stockCode={this.props.match.params.code} />
      </div>
    );
  }
}

export default MainContainer;