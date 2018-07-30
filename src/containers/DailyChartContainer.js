import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Spinner from "react-spinkit";
import styled from "styled-components";

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

    // console.log('DailyChartContainer : ', dailyData);

    if (!dailyData) {
      return <StyledSpinner name="ball-spin-fade-loader" color="#00bcd4"/>;
    }

    return (
      <div>
        <DailyChart dailyData={dailyData} />
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

const StyledSpinner = styled(Spinner)`
  margin-top: 300px;
  margin-left: 500px;
`;

export default connect(mapStateToProps, {fetchDaily})(DailyChartContainer);