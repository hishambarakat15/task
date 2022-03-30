import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  taskes: any[] = [];
  constructor() {


    let savedTaskes = localStorage.getItem('task');
    if (savedTaskes) {
      this.taskes = JSON.parse(savedTaskes);
    } else {
      this.taskes = [];
    }

  }

  /* Delete Task */
  deleteTask(index: any) {
    const isConfirmed = confirm("Are You Sure");
    if (isConfirmed) {
      this.taskes.splice(index, 1);
    }

    this.saveAllToLocallStorage();
  }

  /* Save New Task*/

  saveTask(taskTitle: string) {
    this.taskes.push({
      taskTitle,
    })
    this.saveAllToLocallStorage();
  };


  /* Save data To Local Storage */
  saveAllToLocallStorage() {
    localStorage.setItem('task', JSON.stringify(this.taskes));
  }

}
