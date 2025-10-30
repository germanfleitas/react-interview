import { useCallback, useContext, useEffect, useState } from 'react';
import { Container, Heading } from '@chakra-ui/react';
import { TodoListGroup } from '@/components/TodoListGroup/TodoListGroup';
import { EmptyState } from '@/components/EmptyState/EmptyState';
import { TodoAPI } from '@/services/TodoAPI';
import { Toaster, toaster } from '@/components/ui/toaster';
import { NewTodoList } from '@/components/NewTodoList/NewTodoList';
import { GeneralContext } from '@/context';
import type { TodoListType } from '../../components/types';

export const MainScreen = () => {
  const [todoLists, setTodoLists] = useState<TodoListType[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const { setIsLoading } = useContext(GeneralContext);

  const resetErrorMessage = (e?: unknown) => {
    setErrorMessage((e as Error)?.message ?? null);
  };

  const startCall = () => {
    resetErrorMessage();
    setIsLoading(true);
  }

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
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onClickCreateNewTodoList = async (name: string) => {
    startCall();

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
    startCall();

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
    startCall();

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
    startCall();

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
    startCall();

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
    startCall();

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
    startCall();

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
        todoLists.length
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