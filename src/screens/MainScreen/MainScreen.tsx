import { useCallback, useEffect, useState } from 'react';
import { Center, Container, Heading, Spinner } from '@chakra-ui/react';
import { TodoListGroup } from '@/components/TodoListGroup/TodoListGroup';
import { EmptyState } from '@/components/EmptyState/EmptyState';
import { TodoAPI } from '@/services/TodoAPI';
import { Toaster, toaster } from '@/components/ui/toaster';
import { NewTodoList } from '@/components/NewTodoList/NewTodoList';
import type { TodoListType } from '../../components/types';

export const MainScreen = () => {
  const [todoLists, setTodoLists] = useState<TodoListType[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const resetErrorMessage = (e?: unknown) => {
    setErrorMessage((e as Error)?.message ?? null);
  };

  const getTodoLists = useCallback(async () => {
    resetErrorMessage();

    try {
      const data = await TodoAPI.getTodoLists();
      setTodoLists(data);
    } catch (e: unknown) {
      resetErrorMessage(e);
    } finally {
      setIsLoading(false);
    }
  }, []);

  const onClickCreateNewTodoList = async (name: string) => {
    resetErrorMessage();
    setIsLoading(true);

    try {
      await TodoAPI.createTodoList(name);
      await getTodoLists();
    } catch (e: unknown) {
      resetErrorMessage(e);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickCreateNewTodo = (todoListId: number) => async (description: string) => {
    resetErrorMessage();

    try {
      await TodoAPI.createTodo(description, todoListId);
      await getTodoLists();
    } catch (e: unknown) {
      resetErrorMessage(e);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickCompleteList = (todoListId: number) => async () => {
    resetErrorMessage();

    try {
      await TodoAPI.completeTodoList(todoListId);
      await getTodoLists();
    } catch (e: unknown) {
      resetErrorMessage(e);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickEditList = (todoListId: number) => async (name: string) => {
    resetErrorMessage();

    try {
      await TodoAPI.editTodoList(todoListId, name);
      await getTodoLists();
    } catch (e: unknown) {
      resetErrorMessage(e);
    } finally {
      setIsLoading(false);
    }
  };

  const onClickDeleteList = (todoListId: number) => async () => {
    resetErrorMessage();

    try {
      await TodoAPI.deleteTodoList(todoListId);
      await getTodoLists();
    } catch (e: unknown) {
      resetErrorMessage(e);
    } finally {
      setIsLoading(false);
    }
  };

  const onToggleTodoCompleted = (todoId: number) => async (isCompleted: boolean) => {
    resetErrorMessage();

    try {
      await TodoAPI.toggleTodo(todoId, isCompleted);
      await getTodoLists();
    } catch (e: unknown) {
      resetErrorMessage(e);
    } finally {
      setIsLoading(false);
    }
  };

  const onDeleteTodo = (todoId: number) => async () => {
    resetErrorMessage();

    try {
      await TodoAPI.deleteTodo(todoId);
      await getTodoLists();
    } catch (e: unknown) {
      resetErrorMessage(e);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTodoLists();
  }, [getTodoLists]);

  useEffect(() => {
    if (errorMessage) {
      toaster.create({
        description: errorMessage,
        type: 'error'
      });
    }
  }, [errorMessage]);

  return (
    <Container p={6} bg='gray.50' minH='100vh'>
      <Heading justifySelf='center' marginBottom={4}>TODO App (Crunchloop Interview edition!)</Heading>
      <NewTodoList onClickCreateNewTodoList={onClickCreateNewTodoList} />
      {
        isLoading 
          ? <Center minH='50vh'><Spinner /></Center>
          : todoLists.length
            ? (
              <TodoListGroup
                todoLists={todoLists}
                onClickCreateNewTodo={onClickCreateNewTodo}
                onCompleteList={onClickCompleteList}
                onEditList={onClickEditList}
                onDeleteList={onClickDeleteList}
                onToggleTodoCompleted={onToggleTodoCompleted}
                onDeleteTodo={onDeleteTodo}
              />
            )
            : <EmptyState />
      }
      <Toaster />
    </Container>
  );
}