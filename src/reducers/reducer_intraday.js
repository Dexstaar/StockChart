import { FETCH_INTRADAY } from "../actions/index";

const INITIAL_STATE = { all: [] };

export default function (state = INITIAL_STATE, action) {
  console.log('reducer_intraday', action.payload);

  switch (action.type) {
    case FETCH_INTRADAY:
      return { all: action.payload };
    default:
      return state;
  }
}