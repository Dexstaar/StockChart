import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from 'reactstrap';
import { connect } from 'react-redux';

import { fetchIntraday } from '../actions';

class IntradayChart extends Component {

  componentWillMount() {
    this.props.fetchIntraday('MSFT', '1min');
  }

  render() {
    return (
      <div>
        <div>IntradayChart</div>
        <div>
            Stock Code : {this.props.stockCode}
        </div>
        <div>
            Data : {this.props.IntradayData}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const currentLanguage = state.language;
  const languageLabels = getLanguageLabels(currentLanguage);

  return {
    IntradayData: state.intraDay.all,
  };
}

export default connect(null, {fetchIntraday})(IntradayChart);