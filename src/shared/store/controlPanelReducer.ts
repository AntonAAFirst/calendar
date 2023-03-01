import { RootState } from ".";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocalState {
  firstActivePanel: boolean;
  secondActivePanel: boolean;
  thirdActivePanel: boolean;
}

const initialState: LocalState = {
  firstActivePanel: false,
  secondActivePanel: false,
  thirdActivePanel: false,
};

export const overviewSlice = createSlice({
  name: "controlPanel",
  initialState,
  reducers: {
    newFirstActive: function (state, acton: PayloadAction<boolean>) {
      state.firstActivePanel = acton.payload;
    },
    newSecondActive: function (state, acton: PayloadAction<boolean>) {
      state.secondActivePanel = acton.payload;
    },

    newThirdActive: function (state, acton: PayloadAction<boolean>) {
      state.thirdActivePanel = acton.payload;
    },
  },
});

export const { newFirstActive, newSecondActive, newThirdActive } =
  overviewSlice.actions;

export default overviewSlice.reducer;
