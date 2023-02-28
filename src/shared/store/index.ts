import { configureStore } from "@reduxjs/toolkit";
import overviewReducer from "./overviewReducer";

const store = configureStore({
  reducer: {
    overview: overviewReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
