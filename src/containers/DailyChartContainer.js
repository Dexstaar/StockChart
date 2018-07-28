import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { fetchDaily } from '../actions';
import DailyChart from '../components/DailyChart';

class DailyChartContainer extends Component {

  componentDidMount() {
    this.props.fetchDaily(this.props.stockCode);
  }

  componentDidUpdate(prevProps) {
    if (this.props.stockCode !== prevProps.stockCode) {
      this.props.fetchDaily(this.props.stockCode);
    }
  }

  render() {
    const { dailyData } = this.props;

    if (!dailyData) {
      return 'Loading...';
    }

    return (
      <div>
        <div>
            Stock Code : {this.props.stockCode}
        </div>
        <div>
            <DailyChart dailyData={dailyData} />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    dailyData: state.daily.all['Time Series (Daily)'],
  };
}

DailyChartContainer.propTypes = {
  stockCode: PropTypes.string
};

DailyChartContainer.defaultProps = {
  stockCode: 'msft'
};

export default connect(mapStateToProps, {fetchDaily})(DailyChartContainer);