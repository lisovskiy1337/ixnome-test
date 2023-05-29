import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITableRow } from "../../types/ITableRow";

interface SearchState {
  searchTerm: string;
  searchResults: ITableRow[];
}

const initialState: SearchState = {
  searchTerm: "",
  searchResults: [],
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchTerm: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
    setSearchResults: (state, action: PayloadAction<ITableRow[]>) => {
      state.searchResults = action.payload;
    },
  },
});

export const { setSearchTerm, setSearchResults } = searchSlice.actions;


export default searchSlice.reducer;
