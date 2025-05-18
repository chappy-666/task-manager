import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { taskViewModel } from './view-models/task.signal';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-task-list',
  imports: [FormsModule, CommonModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css',
})
export class TaskListComponent {
  // input state
  newTask = signal('');

  // task state
  tasks = taskViewModel.tasks; // all tasks list
  completedTasks = taskViewModel.completedTasks; // completed tasks list
  pendingTasks = taskViewModel.pendingTasks; // pending tasks list
  addTask = taskViewModel.addTask;
  toggleTask = taskViewModel.toggleTask;
  deleteTask = taskViewModel.deleteTask;
  completedCount = taskViewModel.completedCount;
}
