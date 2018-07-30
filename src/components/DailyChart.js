import React, { Component, Fragment }  from 'react';
import PropTypes from 'prop-types';

class DailyChart extends Component {

  renderBaseXY() {
    const lines = [];
    let y = 0;

    for(let i=0; i<10; i++) {
      y = 50 * ( i + 1 );
      lines.push(<line key={y} x1="45" y1={y} x2="50" y2={y} stroke="#D3D3D3" strokeWidth="1" />);
    }

    lines.push(<line key="0" x1="50" y1="0" x2="50" y2="550" stroke="#000" strokeWidth="2" />);
    lines.push(<line key="550" x1="50" y1="550" x2="1050" y2="550" stroke="#000" strokeWidth="2" />);

    return lines;
  }

  renderVerticalLines(count) {
    let x = 0;
    const lines = [];

    for(let i=0; i<count; i++) {
      x = 10 * (i + 1) + 50;
      lines.push(<line key={i} x1={x} y1="0" x2={x} y2="550" stroke="#D3D3D3" strokeWidth="1" />);
    }

    return lines;
  }

  renderYMarks(highestY, lowestY) {
    const yMarks = [];

    yMarks.push(<text key="10" x="0" y="50" stroke="#A9A9A9" fontSize="10">{highestY}</text> );
    yMarks.push(<text key="0" x="0" y="550" stroke="#A9A9A9" fontSize="10">{lowestY}</text>);

    const gap = (highestY - lowestY) / 10 ;
    
    for(let i=1; i<10; i++) {
      yMarks.push(<text key={i} x="0" y={50*(i+1)} stroke="#A9A9A9" fontSize="10">{highestY - (gap * i)}</text>);
    }
    
    return yMarks;
  }

  renderOHLC(dailyDataArr, highestY, lowestY) {
    console.log('renderOHLC | dailyDataArr : ', dailyDataArr);

    let color = '';

    const ohlcs = [];
    let x, y, openY, closeY, lowY, highY = 0;
    const pixelPerNumber = 500 / ( highestY - lowestY );

    for(let i=0; i<dailyDataArr.length; i++) {

      color = (dailyDataArr[i]['4. close'] > dailyDataArr[i]['1. open']) ? 'green' : 'red';

      // open
      x = 10 * (i + 1) + 50;
      openY = 550 - ( ( dailyDataArr[i]['1. open'] - lowestY ) * pixelPerNumber );

      ohlcs.push(
        <line key={'open'+i} x1={x-3} y1={openY} x2={x} y2={openY} stroke={color} strokeWidth="2" />
      );

      // close
      closeY = 550 - ( ( dailyDataArr[i]['4. close'] - lowestY ) * pixelPerNumber );

      ohlcs.push(
        <line key={'close'+i} x1={x} y1={closeY} x2={x+3} y2={closeY} stroke={color} strokeWidth="2" />
      );

      // low-high
      lowY = 550 - ( ( dailyDataArr[i]['3. low'] - lowestY ) * pixelPerNumber );
      highY = 550 - ( ( dailyDataArr[i]['2. high'] - lowestY ) * pixelPerNumber );

      ohlcs.push(
        <line key={'lowhigh'+i} x1={x} y1={lowY} x2={x} y2={highY} stroke={color} strokeWidth="2" />
      );
    }

    return ohlcs;
  }

  render() {
    const {dailyData} = this.props;

    const dailyDataArr = Object.keys(dailyData).map((key) => {
      return dailyData[key];
    }).reverse();

    const highestY = Math.max.apply(Math, dailyDataArr.map((elem) => {
      return parseInt(elem['2. high']);
    }));

    const lowestY = Math.min.apply(Math, dailyDataArr.map((elem) => {
      return parseInt(elem['3. low']);
    }));

    return (
      <div>
        <svg width="1100" height="560">
          {this.renderYMarks(highestY, lowestY)}
          {this.renderVerticalLines(dailyDataArr.length)}
          {this.renderBaseXY()}
          {this.renderOHLC(dailyDataArr, highestY, lowestY)}
        </svg>
      </div>
    );
  }
};

DailyChart.propTypes = {
  dailyData: PropTypes.object.isRequired
};

export default DailyChart;