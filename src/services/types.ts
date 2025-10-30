type TodoResponseType = {
  id: number;
  description: string;
  isCompleted: boolean;
}

export type TodoListResponseType = {
  id: number;
  name: string;
  todos: TodoResponseType[]
}