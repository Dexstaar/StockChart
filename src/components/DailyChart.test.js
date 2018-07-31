import React from 'react';
import { shallow } from 'enzyme';

import DailyChart from './DailyChart';
import { dailyDataMock } from '../data/fixtures';

let renderedDOM = null;
let props = {};

describe('DailyChart Test', () => {
	it('renders correctly', () => {

    let props = {
      dailyData: dailyDataMock
    };
    
    renderedDOM = shallow(
	    <DailyChart {...props} />
    );
  });
  
  it('shows the rendered DOM structure', () => {
    // console.log(renderedDOM.debug());
  });

  it('shows proper y marks in the graph', () => {
    expect(renderedDOM.find('text').at(0).props().y).toEqual("53");
    expect(renderedDOM.find('text').at(0).props().children[1]).toEqual(1000);
    expect(renderedDOM.find('text').at(1).props().y).toEqual("553");
    expect(renderedDOM.find('text').at(1).props().children[1]).toEqual(100);
    expect(renderedDOM.find('text').at(2).props().y).toEqual(103);
    expect(renderedDOM.find('text').at(2).props().children[1]).toEqual(910);
    expect(renderedDOM.find('text').at(3).props().y).toEqual(153);
    expect(renderedDOM.find('text').at(3).props().children[1]).toEqual(820);
    expect(renderedDOM.find('text').at(4).props().y).toEqual(203);
    expect(renderedDOM.find('text').at(4).props().children[1]).toEqual(730);
    expect(renderedDOM.find('text').at(5).props().y).toEqual(253);
    expect(renderedDOM.find('text').at(5).props().children[1]).toEqual(640);
    expect(renderedDOM.find('text').at(6).props().y).toEqual(303);
    expect(renderedDOM.find('text').at(6).props().children[1]).toEqual(550);
    expect(renderedDOM.find('text').at(7).props().y).toEqual(353);
    expect(renderedDOM.find('text').at(7).props().children[1]).toEqual(460);
    expect(renderedDOM.find('text').at(8).props().y).toEqual(403);
    expect(renderedDOM.find('text').at(8).props().children[1]).toEqual(370);
    expect(renderedDOM.find('text').at(9).props().y).toEqual(453);
    expect(renderedDOM.find('text').at(9).props().children[1]).toEqual(280);
    expect(renderedDOM.find('text').at(10).props().y).toEqual(503);
    expect(renderedDOM.find('text').at(10).props().children[1]).toEqual(190);
  });

  it('shows ohlc lines in the graph', () => {
    // open
    expect(renderedDOM.find('line').at(17).props().y1).toEqual(546.5);
    // close
    expect(renderedDOM.find('line').at(18).props().y1).toEqual(545.5722222222222);
    // low - high
    expect(renderedDOM.find('line').at(19).props().y1).toEqual(546.5944444444444);
    expect(renderedDOM.find('line').at(19).props().y2).toEqual(545.4777777777778);
    //color
    expect(renderedDOM.find('line').at(19).props().stroke).toEqual("green");

    // open
    expect(renderedDOM.find('line').at(20).props().y1).toEqual(545.2388888888889);
    // close
    expect(renderedDOM.find('line').at(21).props().y1).toEqual(545.7444444444444);
    // low - high
    expect(renderedDOM.find('line').at(22).props().y1).toEqual(550);
    expect(renderedDOM.find('line').at(22).props().y2).toEqual(545.1);
    //color
    expect(renderedDOM.find('line').at(22).props().stroke).toEqual("red");

    // open
    expect(renderedDOM.find('line').at(23).props().y1).toEqual(545.5805555555555);
    // close
    expect(renderedDOM.find('line').at(24).props().y1).toEqual(543.9833333333333);
    // low - high
    expect(renderedDOM.find('line').at(25).props().y1).toEqual(545.7777777777778);
    expect(renderedDOM.find('line').at(25).props().y2).toEqual(543.8055555555555);
    //color
    expect(renderedDOM.find('line').at(25).props().stroke).toEqual("green");

    // open
    expect(renderedDOM.find('line').at(26).props().y1).toEqual(544.0333333333333);
    // close
    expect(renderedDOM.find('line').at(27).props().y1).toEqual(544.6555555555556);
    // low - high
    expect(renderedDOM.find('line').at(28).props().y1).toEqual(544.7222222222222);
    expect(renderedDOM.find('line').at(28).props().y2).toEqual(50);
    //color
    expect(renderedDOM.find('line').at(28).props().stroke).toEqual("red");

    // open
    expect(renderedDOM.find('line').at(29).props().y1).toEqual(544.4444444444445);
    // close
    expect(renderedDOM.find('line').at(30).props().y1).toEqual(546.1111111111111);
    // low - high
    expect(renderedDOM.find('line').at(31).props().y1).toEqual(546.6666666666666);
    expect(renderedDOM.find('line').at(31).props().y2).toEqual(543.3333333333334);
    //color
    expect(renderedDOM.find('line').at(31).props().stroke).toEqual("red");
  });
  
});