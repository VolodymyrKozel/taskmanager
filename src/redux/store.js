import { configureStore } from "@reduxjs/toolkit";
import { filtersReducer, tasksReducer } from "./reducers";

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});
