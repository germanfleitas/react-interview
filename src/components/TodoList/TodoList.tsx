import { Todo } from '../Todo/Todo';
import type { TodoListType } from '../types';

export const TodoList = ({ todoList: { todos, name } }: TodoListProps) => {

  return (
    <div>
      <p>{name}</p>
      <div>
        {todos.map((todo) => <Todo key={todo.id} todo={todo}/>)}
      </div>
    </div>
  );
}

type TodoListProps = {
  todoList: TodoListType;
}