import { useState } from 'react';
import { Box, Button, ButtonGroup, Input, Text, VStack } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

export const NewTodo = ({ onClickCreateNewTodo }: NewTodoProps) => {
  const [showCreateButton, setShowCreateButton] = useState<boolean>(true);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormType>();

  const onClickAddNewTask = () => {
    setShowCreateButton(false);
  };

  const onClickCancel = () => {
    setShowCreateButton(true);
  };

  const onSubmit = ({ description }: FormType) => {
    setShowCreateButton(true);
    onClickCreateNewTodo(description);
    reset({ description: '' });
  };

  return (
    <Box>
      {
        showCreateButton
          ? (
            <Button
              width='100%'
              colorPalette='green'
              onClick={onClickAddNewTask}
            >Add new task</Button>
          )
          : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <VStack alignItems='flex-end'>
                <Input
                  placeholder='Enter your list name...'
                  {...register('description', { required: 'Please enter a task description' })}
                />
                <ButtonGroup>
                  <Button colorPalette='green' type='submit'>Add</Button>
                  <Button colorPalette='red' onClick={onClickCancel}>Cancel</Button>
                </ButtonGroup>
              </VStack>
              <Text color='red.500'>{errors?.description?.message}</Text>
            </form>
          )
      }
    </Box>
  )
}

type FormType = {
  description: string;
}

type NewTodoProps = {
  onClickCreateNewTodo: (description: string) => void;
}
