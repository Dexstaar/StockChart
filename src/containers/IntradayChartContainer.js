import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

import { fetchIntraday } from '../actions';
import IntradayChart from '../components/IntradayChart';

class IntradayChartContainer extends Component {

  componentWillMount() {
    this.props.fetchIntraday('MSFT', '1min');
  }

  render() {
    const { intradayData } = this.props;

    // console.log('render | IntradayData : ', IntradayData);

    if (!intradayData) {
      return 'Loading...';
    }

    return (
      <div>
        <div>IntradayChart Container</div>
        <div>
            Stock Code : {this.props.stockCode}
        </div>
        <div>
            <IntradayChart intradayData={intradayData} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    intradayData: state.intraDay.all['Time Series (1min)'],
  };
}

export default connect(mapStateToProps, {fetchIntraday})(IntradayChartContainer);