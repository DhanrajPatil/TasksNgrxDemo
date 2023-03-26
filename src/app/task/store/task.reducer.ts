//  getTasks
//    getTasksSuccess
//    getTasksFail

import { createReducer, on } from "@ngrx/store";
import { Task } from "../task.interface";
import {
  createTaskSuccess,
  deleteTaskSuccess,
  getTasks,
  getTasksFail,
  getTasksSuccess,
  updateTaskSuccess
} from "./task.actions";

export const TASK_STATE_KEY = "tasks";

export interface TaskState {
  tasks: Task[];
  loading: boolean;
  loaded: boolean;
  error: string;
}

export const taskInitialState: TaskState = {
  tasks: [],
  loading: false,
  loaded: false,
  error: ""
};

export const taskReducer = createReducer(
  taskInitialState,
  on(getTasks, (state) => ({
    ...state,
    tasks: [],
    loading: true,
    loaded: false,
    error: ""
  })),
  on(getTasksSuccess, (state, { payload }) => ({
    ...state,
    tasks: [...payload],
    loading: false,
    loaded: true,
    error: ""
  })),
  on(getTasksFail, (state, { payload }) => ({
    ...state,
    tasks: [],
    loading: false,
    loaded: false,
    error: payload
  })),
  on(createTaskSuccess, (state, { payload }) => ({
    ...state,
    tasks: [...state.tasks, payload],
    loading: false,
    error: ""
  })),
  on(updateTaskSuccess, (state, { payload }) => ({
    ...state,
    tasks: state.tasks.map((task) =>
      task.id === payload.id ? { ...task, ...payload } : task
    )
  })),
  on(deleteTaskSuccess, (state, { payload: { taskId } }) => ({
    ...state,
    tasks: state.tasks.filter((task) => task.id !== taskId)
  }))
);
