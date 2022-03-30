import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskFormGroup!: FormGroup;
  tasks: any[] = [];
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this._initTaskForm();

  }

  /* Add New Task */
  onAddNewTask() {
    const newTask = {
      taskTitle: this.taskFormGroup.controls.taskTitle.value
    }
    this.tasks.push(newTask);
    console.log(this.tasks);

  }

  /* Delete Task */
  onDeleteClick(index: any) {
    this.tasks.splice(index, 1)

  }

  /* init Task */
  private _initTaskForm() {
    this.taskFormGroup = this.formBuilder.group({
      taskTitle: ['', [Validators.required]],
    })
  }
}