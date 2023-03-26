import { ChangeDetectionStrategy, Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Store } from "@ngrx/store";

@Component({
  selector: "tasks",
  template: ` <div>Tasks</div> `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TasksComponent {
  readonly form = this.formBuilder.group({
    title: [
      "",
      [Validators.required, Validators.minLength(3), Validators.maxLength(3000)]
    ],
    completed: [false, [Validators.required]]
  });

  constructor(
    // Place Respective type once you know it
    private readonly store: Store<any>,
    private readonly formBuilder: FormBuilder
  ) {}
}
