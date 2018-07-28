// import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import { Button } from 'reactstrap';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

// import { fetchIntraday } from '../actions';
// import IntradayChart from '../components/IntradayChart';

// class IntradayChartContainer extends Component {

//   componentDidMount() {
//     this.props.fetchIntraday(this.props.stockCode);
//   }

//   componentDidUpdate(prevProps) {
//     if (this.props.stockCode !== prevProps.stockCode) {
//       this.props.fetchIntraday(this.props.stockCode);
//     }
//   }

//   render() {
//     const { intradayData } = this.props;

//     if (!intradayData) {
//       return 'Loading...';
//     }

//     return (
//       <div>
//         <div>IntradayChart Container</div>
//         <div>
//             Stock Code : {this.props.stockCode}
//         </div>
//         <div>
//             <IntradayChart intradayData={intradayData} />
//         </div>
//       </div>
//     );
//   }
// }

// function mapStateToProps(state) {
//   return {
//     intradayData: state.intraDay.all['Time Series (1min)'],
//   };
// }

// IntradayChartContainer.propTypes = {
//   stockCode: PropTypes.string
// };

// IntradayChartContainer.defaultProps = {
//   stockCode: 'msft'
// };

// export default connect(mapStateToProps, {fetchIntraday})(IntradayChartContainer);