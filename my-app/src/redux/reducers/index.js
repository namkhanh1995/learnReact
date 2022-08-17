import { combineReducers } from "redux";

import counter from "./post";

const allReducers = combineReducers({
  counter,
});

export default allReducers;