import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from './../services/task.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  taskFormGroup!: FormGroup;
  tasks: any[] = [];
  constructor(private formBuilder: FormBuilder, private _taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this._taskService.taskes;
    this._initTaskForm();

  }

  /* Add New Task */

  onAddNewTask() {
    const taskTitle = this.taskFormGroup.controls.taskTitle.value;
    this._taskService.saveTask(taskTitle);

  }

  /* Delete Task */
  onDeleteClick(index: any) {
    this._taskService.deleteTask(index)

  }

  /* init Task */
  private _initTaskForm() {
    this.taskFormGroup = this.formBuilder.group({
      taskTitle: ['', [Validators.required]],
    })
  }
}