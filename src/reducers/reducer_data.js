import { FETCH_DATA } from "../actions/index";

const INITIAL_STATE = { all: [], post: null };

export default function(state = INITIAL_STATE, action) {
  return { ...state, data: null };
}
