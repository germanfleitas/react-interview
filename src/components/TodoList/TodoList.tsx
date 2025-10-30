import { useState } from 'react';
import { Card, VStack } from '@chakra-ui/react';
import { Todo } from '../Todo/Todo';
import { NewTodo } from '../NewTodo/NewTodo';
import { TodoListActions } from '../TodoListActions/TodoListActions';
import { EditTodoList } from '../EditTodoList/EditTodoList';
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
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const onToggleEditMode = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Card.Root padding={6} width='20em' height='fit-content'>
      <TodoListActions
        onClickCompleteList={onCompleteList}
        onClickEditList={onToggleEditMode}
        onClickDeleteList={onDeleteList}
      />
      {
        isEditing
          ? (
            <EditTodoList
              originalName={name}
              onEditTodoList={onEditList}
              onToggleEditMode={onToggleEditMode}
            />
          )
          : <Card.Title marginBottom={6}>{name}</Card.Title>
      }
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
  onEditList: (name: string) => void;
  onDeleteList: () => void;
  onToggleTodoCompleted: (todoId: number) => (isCompleted: boolean) => void;
  onDeleteTodo: (todoId: number) => () => void;
}
