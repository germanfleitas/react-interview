import { Container, Flex, ScrollArea } from '@chakra-ui/react';
import { TodoList } from '../TodoList/TodoList';
import type { TodoListType } from '../types';

export const TodoListGroup = ({
  todoLists,
  onClickCreateNewTodo,
  onCompleteList,
  onEditList,
  onDeleteList,
  onToggleTodoCompleted,
  onDeleteTodo
}: TodoListGroupProps) => {
  return (
    <Container>
      <ScrollArea.Root>
        <ScrollArea.Viewport>
          <ScrollArea.Content py='4'>
            <Flex gap='4' flexWrap='nowrap'>
              {todoLists.map((todoList) => (
                <TodoList
                  key={todoList.id}
                  todoList={todoList}
                  onClickCreateNewTodo={onClickCreateNewTodo(todoList.id)}
                  onCompleteList={onCompleteList(todoList.id)}
                  onEditList={onEditList(todoList.id)}
                  onDeleteList={onDeleteList(todoList.id)}
                  onToggleTodoCompleted={onToggleTodoCompleted}
                  onDeleteTodo={onDeleteTodo}
                />
              ))}
            </Flex>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation='horizontal' />
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </Container>
  );
}

type TodoListGroupProps = {
  todoLists: TodoListType[];
  onClickCreateNewTodo: (todoListId: number) => (description: string) => void;
  onCompleteList: (todoListId: number) => () => void;
  onEditList: (todoListId: number) => (name: string) => void;
  onDeleteList: (todoListId: number) => () => void;
  onToggleTodoCompleted: (todoId: number) => (isCompleted: boolean) => void;
  onDeleteTodo: (todoId: number) => () => void;
}
