import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Spinner from "react-spinkit";
import styled from "styled-components";

import { fetchDaily } from "../actions";
import DailyChart from "../components/DailyChart";
import { Alert } from "reactstrap";

export class DailyChartContainer extends Component {
  componentDidMount() {
    this.props.fetchDaily(this.props.stockCode);
  }

  componentDidUpdate(prevProps) {
    if (this.props.stockCode !== prevProps.stockCode) {
      this.props.fetchDaily(this.props.stockCode);
    }
  }

  render() {
    const { dailyData, apiLimitMsg, errorMsg } = this.props;
    // console.log('DailyChartContainer | dailyData : ', dailyData);

    if (apiLimitMsg) {
      return <Alert color="warning">{apiLimitMsg}</Alert>;
    }

    if (errorMsg) {
      return <Alert color="danger">{errorMsg}</Alert>;
    }

    if (!dailyData) {
      return <StyledSpinner name="ball-spin-fade-loader" color="#00bcd4" />;
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
    dailyData: state.daily.all["Time Series (Daily)"],
    apiLimitMsg: state.daily.all.Information,
    errorMsg: state.daily.all["Error Message"]
  };
}

DailyChartContainer.propTypes = {
  stockCode: PropTypes.string
};

DailyChartContainer.defaultProps = {
  stockCode: "msft"
};

const StyledSpinner = styled(Spinner)`
  margin-top: 300px;
  margin-left: 500px;
`;

export default connect(
  mapStateToProps,
  { fetchDaily }
)(DailyChartContainer);
