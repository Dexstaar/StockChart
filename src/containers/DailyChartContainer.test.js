import React from 'react';
import { mount } from 'enzyme';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import reduxThunk from 'redux-thunk';
import configureMockStore from 'redux-mock-store';

import DailyChartContainer from './DailyChartContainer';
import rootReducer from '../reducers';
import { daily, dailyMockData } from '../data/fixtures';

describe('DailyChartContainer Test', () => {
  let renderedDOM = null;

	it('renders correctly', () => {
    const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
    // const mockStore = configureMockStore();

    // let store = mockStore({
    //   dadailyMockDataily
    // });

    let mockReducer = daily;

    

    let store = createStore(combineReducers({ rootReducer }));

    const props = {
      dailyData: dailyMockData
    };

    // console.log('DailyChartContainer Test | props : ', props );


    renderedDOM = mount(
      <Provider store={store}>
        <DailyChartContainer {...props} />
      </Provider>
    );

    

		// renderedDOM = mount(
    //   <Provider store={createStoreWithMiddleware(
    //     rootReducer,
    //     window.__REDUX_DEVTOOLS_EXTENSION__ &&
    //     window.__REDUX_DEVTOOLS_EXTENSION__()
    //   )}>
		// 	  <DailyChartContainer {...props} />
    //   </Provider>
    // );
		
  });
  
  it('shows the rendered DOM structure', () => {
    console.log(renderedDOM.debug());
  });
});