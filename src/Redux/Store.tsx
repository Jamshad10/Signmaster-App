import { configureStore,combineReducers } from "@reduxjs/toolkit";
import { Reducer } from "./Reducer";
import logger from 'redux-logger'
import thunk from "redux-thunk";

const rootReducer = combineReducers({user:Reducer})
const Store = configureStore({
  reducer: rootReducer,
  middleware: [thunk, logger]
});

export default Store;
