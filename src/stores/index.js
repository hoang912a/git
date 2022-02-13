import reducer from "./reducer/auth";
import { createStore, combineReducers } from "redux";
const rootReducer = combineReducers({
  auth: reducer,
});
const store = createStore(rootReducer);
export default store;
