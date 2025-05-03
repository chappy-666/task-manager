import { Component } from '@angular/core';
import { taskViewModel } from './view-models/task.signal';

@Component({
  selector: 'app-task-list',
  imports: [],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  tasks = taskViewModel.tasks;  // Tasks の一覧
  addTask = taskViewModel.addTask;
  toggleTask = taskViewModel.toggleTask;
  deleteTask = taskViewModel.deleteTask;
  completedCount = taskViewModel.completedCount;
}
