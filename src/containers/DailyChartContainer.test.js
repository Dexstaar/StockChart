import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';

import {DailyChartContainer} from './DailyChartContainer';
import DailyReducer from '../reducers/reducer_daily';
import { dailyDataMock } from '../data/fixtures';

let renderedDOM = null;
const store = createStore(combineReducers({ daily: DailyReducer }));
let props = {};

describe('DailyChartContainer Loader Test', () => {
	it('renders correctly', () => {
    props = {
      fetchDaily: fn => fn
    };
    
    renderedDOM = mount(
      <Provider store={store}>
			  <DailyChartContainer {...props} />
      </Provider>
    );
  });
  
  it('shows Loader component when no dailyData in props', () => {
    expect(renderedDOM.find('Spinner').exists()).toBe(true);
  });
});

describe('DailyChartContainer Graph Test', () => {
	it('renders correctly', () => {
    let props = {
      dailyData: dailyDataMock,
      fetchDaily: fn => fn
    };
    
    renderedDOM = mount(
      <Provider store={store}>
			  <DailyChartContainer {...props} />
      </Provider>
    );
  });
  
  // it('shows the rendered DOM structure', () => {
  //   console.log(renderedDOM.debug());
  // });
});