export default interface Task {
    id: number;
    label: string;
    status: 'todo' | 'done';
  }