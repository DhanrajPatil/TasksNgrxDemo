import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay } from "rxjs/operators";
import { Task } from "./task.interface";

@Injectable({ providedIn: "root" })
export class TaskService {
  tasks: Task[] = [
    {
      id: "0",
      title: "Check Pull Request",
      completed: true
    }
  ];

  getTasks(): Observable<Task[]> {
    return of(this.tasks).pipe(delay(400));
  }

  createTask(task: Omit<Task, "id">): Observable<string> {
    const id = this.tasks.length.toString();
    this.tasks = [...this.tasks, { id, ...task }];
    return of(id).pipe(delay(400));
  }

  updateTask(taskId: string, task: Task): Observable<void> {
    this.tasks = this.tasks.map((x) => (x.id === taskId ? { ...task } : x));
    return of(void 0).pipe(delay(400));
  }

  deleteTask(taskId: string): Observable<void> {
    this.tasks = this.tasks.filter((x) => x.id !== taskId);
    return of(void 0).pipe(delay(400));
  }
}
