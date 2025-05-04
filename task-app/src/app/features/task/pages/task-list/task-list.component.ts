import { Component, model, signal } from '@angular/core';
import { taskViewModel } from './view-models/task.signal';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-task-list',
  imports: [FormsModule],
  templateUrl: './task-list.component.html',
  styleUrl: './task-list.component.css'
})
export class TaskListComponent {
  // input state
  newTaskInputText = signal('');

  // task state
  tasks = taskViewModel.tasks;  // all tasks list
  addTask = taskViewModel.addTask;
  toggleTask = taskViewModel.toggleTask;
  deleteTask = taskViewModel.deleteTask;
  completedCount = taskViewModel.completedCount;

  
}
