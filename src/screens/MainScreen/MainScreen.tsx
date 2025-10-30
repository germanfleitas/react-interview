import { useCallback, useEffect, useState } from 'react';
import { Center, Container, Heading, Spinner } from '@chakra-ui/react';
import { TodoListGroup } from '@/components/TodoListGroup/TodoListGroup';
import { EmptyState } from '@/components/EmptyState/EmptyState';
import { TodoAPI } from '@/services/TodoAPI';
import { Toaster, toaster } from '@/components/ui/toaster';
import type { TodoListType } from '../../components/types';

export const MainScreen = () => {
  const [todoLists, setTodoLists] = useState<TodoListType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getTodoLists = useCallback(async () => {
    try {
      const data = await TodoAPI.getTodoLists();
      setTodoLists(data);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (e) {
      toaster.create({
        description: 'Oops! Something went wrong... Try again later',
        type: 'error'
      });
    } finally {
      setIsLoading(false);
    }
  }, []);

  const onClickCreateNewTodoList = async () => {
    setIsLoading(true);
    await TodoAPI.createTodoList('New List');
    await getTodoLists();
  };

  const onClickCreateNewTodo = (todoListId: number) => async (description: string) => {
    await TodoAPI.createTodo(description, todoListId);
    await getTodoLists();
  };

  useEffect(() => {
    getTodoLists();
  }, [getTodoLists]);

  return (
    <Container p={6} bg='gray.50' minH='100vh'>
      <Heading justifySelf='center'>TODO App (Crunchloop Interview edition!)</Heading>
      {
        isLoading 
          ? <Center minH='50vh'><Spinner /></Center>
          : todoLists.length
            ? (
              <TodoListGroup
                todoLists={todoLists}
                onClickCreateNewTodoList={onClickCreateNewTodoList}
                onClickCreateNewTodo={onClickCreateNewTodo}
              />
            )
            : <EmptyState onClickCreateNewTodoList={onClickCreateNewTodoList} />
      }
      <Toaster />
    </Container>
  );
}