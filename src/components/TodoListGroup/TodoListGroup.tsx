import { Button, Container, Flex, ScrollArea } from '@chakra-ui/react';
import { TodoList } from '../TodoList/TodoList';
import type { MouseEventHandler } from 'react'
import type { TodoListType } from '../types';

export const TodoListGroup = ({ todoLists, onClickCreateNewTodoList }: TodoListGroupProps) => {
  return (
    <Container>
      <Button onClick={onClickCreateNewTodoList}>New TODO list</Button>
      <ScrollArea.Root>
        <ScrollArea.Viewport>
          <ScrollArea.Content py='4'>
            <Flex gap='4' flexWrap='nowrap'>
              {todoLists.map((todoList) => <TodoList key={todoList.id} todoList={todoList} />)}
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
  onClickCreateNewTodoList: MouseEventHandler<HTMLButtonElement>;
}
