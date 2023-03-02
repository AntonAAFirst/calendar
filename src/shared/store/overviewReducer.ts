import { RootState } from ".";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LocalState {
  currentAge: number;
  allDollars: number;
  booksRead: number;
  pagesOfYourBook: number;
  randomText: string;
}

const initialState: LocalState = {
  currentAge: 0,
  allDollars: 0,
  booksRead: 0,
  pagesOfYourBook: 0,
  randomText: "",
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
    newRandomText: function (state, action: PayloadAction<string>) {
      state.randomText = action.payload;
    },
  },
});

export const {
  newCurrentAge,
  newAllDolars,
  newBooksRead,
  newPagesOfYourBook,
  newRandomText,
} = overviewSlice.actions;

export default overviewSlice.reducer;
