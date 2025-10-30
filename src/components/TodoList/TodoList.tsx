import { Card, VStack } from '@chakra-ui/react';
import { Todo } from '../Todo/Todo';
import { NewTodo } from '../NewTodo/NewTodo';
import { TodoListActions } from '../TodoListActions/TodoListActions';
import type { TodoListType } from '../types';

export const TodoList = ({
  todoList: { todos, name },
  onClickCreateNewTodo,
  onCompleteList,
  onEditList,
  onDeleteList,
  onToggleTodoCompleted,
  onDeleteTodo
}: TodoListProps) => {
  return (
    <Card.Root padding={6} width='20em' height='fit-content'>
      <TodoListActions
        onCompleteList={onCompleteList}
        onEditList={onEditList}
        onDeleteList={onDeleteList}
      />
      <Card.Title marginBottom={4}>{name}</Card.Title>
      <VStack marginBottom={4}>
        {todos.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onToggleTodoCompleted={onToggleTodoCompleted(todo.id)}
            onDeleteTodo={onDeleteTodo(todo.id)}
          />
        ))}
      </VStack>
      <NewTodo onClickCreateNewTodo={onClickCreateNewTodo} />
    </Card.Root>
  );
}

type TodoListProps = {
  todoList: TodoListType;
  onClickCreateNewTodo: (description: string) => void;
  onCompleteList: () => void;
  onEditList: () => void;
  onDeleteList: () => void;
  onToggleTodoCompleted: (todoId: number) => (isCompleted: boolean) => void;
  onDeleteTodo: (todoId: number) => () => void;
}