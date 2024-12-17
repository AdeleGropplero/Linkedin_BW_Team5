import { combineReducers, configureStore } from "@reduxjs/toolkit";
import profileReducer from "./reducers/profileReducer";
import { thunk } from "redux-thunk";
import experienceReducer from "./reducers/experienceReducer";
import ExperienceReducer2 from "./reducers/ExperienceReducers2";
import { persistStore, persistReducer } from "redux-persist";
import localStorage from "redux-persist/lib/storage";

const persistConfig = {
  storage: localStorage,
  key: "root"
};
const rootReducer = combineReducers({
  profile: profileReducer,
  experiences: experienceReducer,
  experiences2: ExperienceReducer2
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
});

const persistedStore = persistStore(store);
export { store, persistedStore };
