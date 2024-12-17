import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileReducer";
import { thunk } from "redux-thunk";
import experienceReducer from "./reducers/experienceReducer";

const rootReducer = combineReducers({
  profile: profileReducer
});
const store = configureStore({
  reducer: rootReducer,
  experiences: experienceReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
