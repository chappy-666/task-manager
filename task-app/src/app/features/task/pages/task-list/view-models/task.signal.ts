import { signal, computed } from '@angular/core';
import { Task } from '../../../models/task';

const tasks = signal<Task[]>([]);

export const taskViewModel = {
  tasks,
  addTask: (title: string) => {
    tasks.update(current => [...current, {
      id: Date.now(),
      title,
      completed: false
    }]);
  },
  toggleTask: (id: number) => {
    tasks.update(current => current.map(t =>
      t.id === id ? { ...t, completed: !t.completed } : t
    ));
  },
  deleteTask: (id: number) => {
    tasks.update(current => current.filter(t => t.id !== id));
  },
  completedCount: computed(() =>
    tasks().filter(t => t.completed).length
  )
};