import { signal, computed } from '@angular/core';
import { Task } from '../../../models/task';

const tasks = signal<Task[]>([]);

// Function to calculate the deadline for a task
const calculateDeadline = (): Date =>{
  const deadline = new Date();
  deadline.setDate(deadline.getDate() + 7);
  return deadline;
}

export const taskViewModel = {
  tasks,
  addTask: (title: string) => {
    tasks.update(current => [...current, {
      id: Date.now(),
      title,
      completed: false,
      createdAt: new Date(),
      deadline: calculateDeadline()
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