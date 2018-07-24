import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

import { fetchData } from '../actions';

class IntradayChart extends Component {

  componentWillMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <div>
        <div>IntradayChart</div>
        <div>
            Stock Code : {this.props.stockCode}
        </div>
      </div>
    );
  }
}

export default connect(null, {fetchData})(IntradayChart);