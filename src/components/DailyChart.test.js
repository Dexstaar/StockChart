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
    console.log(renderedDOM.debug());
  });

  // it('shows OHLC lines in the graph', () => {
  //   expect(renderedDOM.find('line').at(0).props()['x1']).toEqual(60);
  //   expect(renderedDOM.find('line').at(1).props()['x1']).toEqual(70);
  //   expect(renderedDOM.find('line').at(2).props()['x1']).toEqual(80);
  //   expect(renderedDOM.find('line').at(3).props()['x1']).toEqual(90);
  //   expect(renderedDOM.find('line').at(4).props()['x1']).toEqual(100);
  // });
});