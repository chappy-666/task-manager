export interface Task {
  id: number;
  title: string;
  completed: boolean;
  createdAt: Date;
  deadline: Date | null;
  completedAt: Date | null;
}
