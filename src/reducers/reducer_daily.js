import { FETCH_DAILY } from "../actions/index";

const INITIAL_STATE = { all: { 'Time Series (Daily)': null } };

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DAILY:
      return { all: action.payload };
    default:
      return state;
  }
}