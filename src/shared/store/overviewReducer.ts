import { RootState } from ".";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocalState {
  currentAge: number;
  allDollars: number;
  booksRead: number;
  pagesOfYourBook: number;
}

const initialState: LocalState = {
  currentAge: 0,
  allDollars: 0,
  booksRead: 0,
  pagesOfYourBook: 0,
};

export const overviewSlice = createSlice({
  name: "overview",
  initialState,
  reducers: {
    newCurrentAge: function (state, action: PayloadAction<number>) {
      state.currentAge = action.payload;
    },
    newAllDolars: function (state, action: PayloadAction<number>) {
      state.allDollars = action.payload;
    },
    newBooksRead: function (state, action: PayloadAction<number>) {
      state.booksRead = action.payload;
    },
    newPagesOfYourBook: function (state, action: PayloadAction<number>) {
      state.pagesOfYourBook = action.payload;
    },
  },
});

export const { newCurrentAge, newAllDolars, newBooksRead, newPagesOfYourBook } =
  overviewSlice.actions;

export default overviewSlice.reducer;
