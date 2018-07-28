import React, { Component, Fragment }  from 'react';
import PropTypes from 'prop-types';


class IntradayChart extends Component {

  renderBaseXY() {
    return (
      <Fragment>
        <line x1="50" y1="25" x2="50" y2="500" stroke="black" strokeWidth="1" />
        <line x1="50" y1="500" x2="1050" y2="500" stroke="black" strokeWidth="1" />
        <line x1="45" y1="500" x2="50" y2="500" stroke="black" strokeWidth="1" />
        <line x1="45" y1="450" x2="50" y2="450" stroke="black" strokeWidth="1" />
        <line x1="45" y1="400" x2="50" y2="400" stroke="black" strokeWidth="1" />
        <line x1="45" y1="350" x2="50" y2="350" stroke="black" strokeWidth="1" />
        <line x1="45" y1="300" x2="50" y2="300" stroke="black" strokeWidth="1" />
        <line x1="45" y1="250" x2="50" y2="250" stroke="black" strokeWidth="1" />
        <line x1="45" y1="200" x2="50" y2="200" stroke="black" strokeWidth="1" />
        <line x1="45" y1="150" x2="50" y2="150" stroke="black" strokeWidth="1" />
        <line x1="45" y1="100" x2="50" y2="100" stroke="black" strokeWidth="1" />
        <line x1="45" y1="50" x2="50" y2="50" stroke="black" strokeWidth="1" />
      </Fragment>
    );
  }

  renderVerticalLines(count) {
    let x = 0;
    const lines = [];

    for(let i=0; i<count; i++) {
      x = 10 * i + 50;

      // console.log('renderVerticalLines | x = ', x);
      lines.push(<line key={i} x1={x} y1="25" x2={x} y2="500" stroke="grey" strokeWidth="1" />);
    }

    return lines;
  }

  render() {
    const {intradayData} = this.props;
    const intradayDataLength = Object.keys(intradayData).length;
    console.log('IntradayChart | intradayData :', this.props.intradayData);
    console.log('IntradayChart | intradayDataLength :', intradayDataLength);
    // console.log('IntradayChart | lines :', this.renderVerticalLines(intradayDataLength) );

    return (
      <div>
        <svg width="1100" height="550">
          {this.renderBaseXY()}
          {this.renderVerticalLines(intradayDataLength)}
        </svg>
      </div>
    );
  }
};

IntradayChart.propTypes = {
  intradayData: PropTypes.object.isRequired
};

export default IntradayChart;