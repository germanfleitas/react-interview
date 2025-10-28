import { Todo } from '../Todo/Todo';
import type { TodoType } from '../types';

export const TodoList = ({ todos }: TodoListProps) => {

  return (
    <div>
      <p>Title</p>
      <div>
        {todos.map((todo) => <Todo key={todo.id} todo={todo}/>)}
      </div>
    </div>
  );
}

type TodoListProps = {
  todos: TodoType[];
}