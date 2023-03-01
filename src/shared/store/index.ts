import { configureStore } from "@reduxjs/toolkit";
import controlPanelReducer from "./controlPanelReducer";
import overviewReducer from "./overviewReducer";

const store = configureStore({
  reducer: {
    overview: overviewReducer,
    controlPanel: controlPanelReducer,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
