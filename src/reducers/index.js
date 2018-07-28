import { combineReducers } from 'redux';

import DailyReducer from './reducer_daily';

const rootReducer = combineReducers({
	daily: DailyReducer
});

export default rootReducer;
