import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "core-js/fn/array";
import {
  switchMap,
  map,
  catchError,
  concatMap,
  mergeMap
} from "rxjs/operators";
import { TaskService } from "../task.service";
import {
  createTask,
  createTaskSuccess,
  getTasks,
  getTasksFail,
  getTasksSuccess
} from "./task.actions";

// Stragegies
// switchMap
// concatMap
// exaustMap
// mergeMap

@Injectable()
export class TaskEffect {
  getTasks$ = this.actions$.pipe(
    ofType(getTasks),
    switchMap(() =>
      this.taskService.getTasks().pipe(
        map((response) => getTasksSuccess({ payload: response })),
        catchError(() => of(getTasksFail({ payload: "unexpectedError" })))
      )
    )
  );

  createTask$ = this.actions$.pipe(
    ofType(createTask),
    concatMap(({ payload }) =>
      this.taskService
        .createTask(payload)
        .pipe(map(() => createTaskSuccess({ payload })))
    )
  );

  updateTask$;

  deleteTask$;

  constructor(
    private readonly actions$: Actions,
    private readonly taskService: TaskService
  ) {}
}
