import { applyMiddleware, combineReducers } from "redux";
import { countReducer } from "../reducers/count";
import logger from 'redux-logger';

const rootReducer = combineReducers({
  count: countReducer,
})

const store = createStore(rootReducer, applyMiddleware(logger));

export default store;