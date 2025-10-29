import { Flex, ScrollArea } from '@chakra-ui/react';
import { TodoList } from '../TodoList/TodoList';
import type { TodoListType } from '../types';

export const TodoListGroup = ({ todoLists }: TodoListGroupProps) => {
  return (
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
  );
}

type TodoListGroupProps = {
  todoLists: TodoListType[]
}
