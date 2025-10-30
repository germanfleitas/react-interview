import { Card, VStack } from '@chakra-ui/react';
import { Todo } from '../Todo/Todo';
import { NewTodo } from '../NewTodo/NewTodo';
import type { TodoListType } from '../types';

export const TodoList = ({ todoList: { todos, name }, onClickCreateNewTodo }: TodoListProps) => {
  return (
    <Card.Root padding={6} width='20em' height='fit-content'>
      <Card.Title marginBottom={4}>{name}</Card.Title>
      <VStack marginBottom={4}>
        {todos.map((todo) => <Todo key={todo.id} todo={todo}/>)}
      </VStack>
      <NewTodo onClickCreateNewTodo={onClickCreateNewTodo} />
    </Card.Root>
  );
}

type TodoListProps = {
  todoList: TodoListType;
  onClickCreateNewTodo: (description: string) => void;
}