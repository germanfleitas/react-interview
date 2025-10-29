import { Container, Flex, Heading, ScrollArea } from '@chakra-ui/react';
import { TodoList } from '../../components/TodoList/TodoList';
import type { TodoListType } from '../../components/types';

const todoLists: TodoListType[] = [
  {
    id: 1,
    name: 'Groceries',
    todos: [
      { id: 1, description: 'Buy milk', isCompleted: false },
      { id: 2, description: 'Get fresh vegetables', isCompleted: true },
      { id: 3, description: 'Pick up bread', isCompleted: false },
    ],
  },
  {
    id: 2,
    name: 'Work Tasks',
    todos: [
      { id: 4, description: 'Finish project report', isCompleted: false },
      { id: 5, description: 'Send weekly update email', isCompleted: true },
      { id: 6, description: 'Fix login bug', isCompleted: false },
      { id: 7, description: 'Review pull requests', isCompleted: true },
    ],
  },
  {
    id: 3,
    name: 'Weekend Plans',
    todos: [
      { id: 8, description: 'Go hiking', isCompleted: false },
      { id: 9, description: 'Watch a movie', isCompleted: true },
      { id: 10, description: 'Clean the apartment', isCompleted: false },
      { id: 11, description: 'Call parents', isCompleted: true },
      { id: 12, description: 'Read a book', isCompleted: false },
    ],
  },
];

export const MainScreen = () => {
  return (
    <Container p={6} bg='gray.50' minH='100vh'>
      <Heading justifySelf='center'>Todo App (Crunchloop Interview edition!)</Heading>
      <ScrollArea.Root>
        <ScrollArea.Viewport>
          <ScrollArea.Content py="4">
            <Flex gap="4" flexWrap="nowrap">
              {todoLists.map((todoList) => <TodoList key={todoList.id} todoList={todoList} />)}
            </Flex>
          </ScrollArea.Content>
        </ScrollArea.Viewport>
        <ScrollArea.Scrollbar orientation="horizontal" />
        <ScrollArea.Corner />
      </ScrollArea.Root>
    </Container>
  );
}