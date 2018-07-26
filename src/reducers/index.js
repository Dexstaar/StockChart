import { combineReducers } from 'redux';

import IntradayReducer from './reducer_intraday';

const rootReducer = combineReducers({
	intraDay: IntradayReducer
});

export default rootReducer;
