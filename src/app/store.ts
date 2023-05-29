import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { tableRowSlice } from "./slices/tableRowSlice";
import { searchSlice } from "./slices/searchSlice";
// ...
const combinedReducers = combineReducers({
  tableRowData: tableRowSlice.reducer,
  search: searchSlice.reducer,
});

export const store = configureStore({
  reducer: combinedReducers,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
