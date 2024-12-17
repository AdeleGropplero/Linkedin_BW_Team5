import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileReducer";
import { thunk } from "redux-thunk";
import ExperienceReducer from "./reducers/ExperienceReducers";

const rootReducer = combineReducers({
  profile: profileReducer,
  experience: ExperienceReducer
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
