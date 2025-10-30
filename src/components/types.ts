export type TodoType = {
  id: number;
  description: string;
  isCompleted: boolean;
}

export type TodoListType = {
  id: number;
  name: string;
  todos: TodoType[]
}