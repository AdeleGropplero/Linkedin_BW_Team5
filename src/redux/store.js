import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileReducer";
import { thunk } from "redux-thunk";
import experienceReducer from "./reducers/experienceReducer";
import ExperienceReducer2 from "./reducers/ExperienceReducers2";

const rootReducer = combineReducers({
  profile: profileReducer,
  experiences: experienceReducer,
  experiences2: ExperienceReducer2
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

export default store;
