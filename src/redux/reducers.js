import { statusFilters } from "./constants";
import {
  addTask,
  deleteTask,
  toggleCompleted,
  setStatusFilter,
} from "./actions";
import { createReducer } from "@reduxjs/toolkit";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

/* export const tasksReducer = (state = tasksInitialState, action) => {
  switch (action.type) {
    case addTask.type:
      return [...state, action.payload];
    case deleteTask.type:
      return state.filter((task) => task.id !== action.payload);
    case toggleCompleted.type:
      return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      });
    default:
      return state;
  }
}; */
export const tasksReducer = createReducer(tasksInitialState, (builder) => {
  builder
    .addCase(addTask, (state, action) => {
      state.push(action.payload);
      /*  return [...state, action.payload]; */
    })
    .addCase(deleteTask, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state.splice(index, 1);
      /*  return state.filter((task) => task.id !== action.payload); */
    })
    .addCase(toggleCompleted, (state, action) => {
      const index = state.findIndex((task) => task.id === action.payload);
      state[index].completed = !state[index].completed;
      /*  return state.map((task) => {
        if (task.id !== action.payload) {
          return task;
        }
        return { ...task, completed: !task.completed };
      }); */
    });
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, (builder) => {
  builder.addCase(setStatusFilter, (state, action) => {
    state.status = action.payload;
    /*   return { ...state, status: action.payload }; */
  });
});
/* export const filtersReducer = (state = filtersInitialState, action) => {
  switch (action.type) {
    case setStatusFilter.type:
      return {
        ...state,
        status: action.payload,
      };
    default:
      return state;
  }
}; */
