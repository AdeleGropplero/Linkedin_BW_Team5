import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileReducer";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  profile: profileReducer
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
