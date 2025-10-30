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

  const onClickCreateNewTodoList = async (name: string) => {
    setIsLoading(true);
    await TodoAPI.createTodoList(name);
    await getTodoLists();
  };

  const onClickCreateNewTodo = (todoListId: number) => async (description: string) => {
    await TodoAPI.createTodo(description, todoListId);
    await getTodoLists();
  };

  const onClickCompleteList = (todoListId: number) => async () => {
    await TodoAPI.completeTodoList(todoListId);
    await getTodoLists();
  };

  const onClickEditList = (todoListId: number) => async () => {
    // Add logic
  };

  const onClickDeleteList = (todoListId: number) => async () => {
    await TodoAPI.deleteTodoList(todoListId);
    await getTodoLists();
  };

  const onToggleTodoCompleted = (todoId: number) => async (isCompleted: boolean) => {
    await TodoAPI.toggleTodo(todoId, isCompleted);
    await getTodoLists();
  };

  const onDeleteTodo = (todoId: number) => async () => {
    await TodoAPI.deleteTodo(todoId);
    await getTodoLists();
  };

  useEffect(() => {
    getTodoLists();
  }, [getTodoLists]);

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