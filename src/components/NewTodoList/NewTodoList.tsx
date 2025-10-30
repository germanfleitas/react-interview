import { useState } from 'react';
import { Box, Button, ButtonGroup, HStack, Input } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

export const NewTodoList = ({ onClickCreateNewTodoList }: NewTodoListProps) => {
  const [showCreateButton, setShowCreateButton] = useState<boolean>(true);
  const { register, handleSubmit, reset } = useForm<FormType>();

  const onClickCreateNew = () => {
    setShowCreateButton(false);
  };

  const onClickCancel = () => {
    setShowCreateButton(true);
  };

  const onSubmit = ({ name }: FormType) => {
    setShowCreateButton(true);
    onClickCreateNewTodoList(name);
    reset({ name: '' });
  };

  return (
    <Box padding={8}>
      {
        showCreateButton
          ? (
            <Button
              colorPalette='green'
              onClick={onClickCreateNew}
            >Create new list</Button>
          )
          : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <HStack alignItems='flex-end'>
                <Input
                  placeholder='Enter your task...'
                  {...register('name')}
                />
                <ButtonGroup>
                  <Button colorPalette='green' type='submit'>Add</Button>
                  <Button colorPalette='red' onClick={onClickCancel}>Cancel</Button>
                </ButtonGroup>
              </HStack>
            </form>
          )
      }
    </Box>
  )
}

type FormType = {
  name: string;
}

type NewTodoListProps = {
  onClickCreateNewTodoList: (name: string) => void;
}
