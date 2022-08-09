import { combineReducers } from "redux";

import dataReducer from "./reducer/dataReducer";

export const rootReducer = combineReducers({
  dataSeatState:dataReducer,
  // Nơi sẽ chứa các store theo từng nghiệp vụ
  // addValue:checkdReducer,
});
