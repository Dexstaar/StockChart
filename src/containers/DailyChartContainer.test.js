import React from 'react';
import { shallow, mount } from 'enzyme';
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

describe('DailyChartContainer Error Message Test', () => {
  const errorMsgMock = 'mock error msg';

	it('renders correctly', () => {
    props = {
      errorMsg: errorMsgMock,
      fetchDaily: fn => fn
    };
    
    renderedDOM = mount(
      <Provider store={store}>
			  <DailyChartContainer {...props} />
      </Provider>
    );
  });
  
  it('shows the error message when errorMsg in props', () => {
    expect(renderedDOM.find('div').at(0).props().className).toEqual("alert alert-danger fade");
    expect(renderedDOM.find('div').at(0).props().children[1]).toEqual(errorMsgMock);
  });

  it('doesnt show loader and graphes', () => {
    expect(renderedDOM.find('Spinner').exists()).toBe(false);
    expect(renderedDOM.find('svg').exists()).toBe(false);
  });
});

describe('DailyChartContainer API Call Limit Message Test', () => {
  const apiLimitMsgMock = 'api limit msg';

	it('renders correctly', () => {
    props = {
      apiLimitMsg: apiLimitMsgMock,
      fetchDaily: fn => fn
    };
    
    renderedDOM = mount(
      <Provider store={store}>
			  <DailyChartContainer {...props} />
      </Provider>
    );
  });

  it('shows the api limit message when apiLimitMsg in props', () => {
    expect(renderedDOM.find('div').at(0).props().className).toEqual("alert alert-warning fade");
    expect(renderedDOM.find('div').at(0).props().children[1]).toEqual(apiLimitMsgMock);
  });

  it('doesnt show loader and graphes', () => {
    expect(renderedDOM.find('Spinner').exists()).toBe(false);
    expect(renderedDOM.find('svg').exists()).toBe(false);
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

  it('shows DailyChart component', () => {
    expect(renderedDOM.find('DailyChart').exists()).toBe(true);
    expect(renderedDOM.find('DailyChart').props().dailyData).toEqual(dailyDataMock);
  });

  it('doesnt show loader', () => {
    expect(renderedDOM.find('Spinner').exists()).toBe(false);
  });
});