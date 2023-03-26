import { createAction, props } from "@ngrx/store";
import { Task } from "../task.interface";

export const getTasks = createAction("[Task] Get Tasks");

export const getTasksSuccess = createAction(
  "[Task] Get Tasks Success",
  props<{ payload: Task[] }>()
);

export const getTasksFail = createAction(
  "[Task] Get Tasks Fail",
  props<{ payload: string }>()
);

export const createTask = createAction(
  "[Task] Create Task",
  props<{ payload: Omit<Task, "id"> }>()
);

export const createTaskSuccess = createAction(
  "[Task] Create Task Success",
  props<{ payload: Task }>()
);

export const createTaskFail = createAction(
  "[Task] Create Task Fail",
  props<{ payload: string }>()
);

export const updateTask = createAction(
  "[Task] Update Task",
  props<{ payload: Task }>()
);

export const updateTaskSuccess = createAction(
  "[Task] Update Task Success",
  props<{ payload: Task }>()
);

export const updateTaskFail = createAction(
  "[Task] Update Task Fail",
  props<{ payload: string }>()
);

export const deleteTask = createAction(
  "[Task] Delete Task",
  props<{ payload: { taskId: string } }>()
);

export const deleteTaskSuccess = createAction(
  "[Task] Delete Task Success",
  props<{ payload: { taskId: string } }>()
);

export const deleteTaskFail = createAction(
  "[Task] Delete Task Fail",
  props<{ payload: string }>()
);

export type TaskActions = ReturnType<
  | typeof getTasks
  | typeof getTasksSuccess
  | typeof getTasksFail
  | typeof createTask
  | typeof createTaskSuccess
  | typeof createTaskFail
  | typeof updateTask
  | typeof updateTaskSuccess
  | typeof updateTaskFail
  | typeof deleteTask
  | typeof deleteTaskSuccess
  | typeof deleteTaskFail
>;
