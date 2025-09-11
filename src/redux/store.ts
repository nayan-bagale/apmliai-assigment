// src/app/store.js
import { configureStore } from "@reduxjs/toolkit";
import companiesReducer from "../redux/features/companiesSlice";

export const store = configureStore({
  reducer: {
    // Add your reducers here
    companies: companiesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

