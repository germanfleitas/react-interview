import { useContext, useState } from 'react';
import { Box, Button, ButtonGroup, HStack, Input, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';
import { GeneralContext } from '@/context';

export const NewTodoList = ({ onClickCreateNewTodoList }: NewTodoListProps) => {
  const [showCreateButton, setShowCreateButton] = useState<boolean>(true);
  const { isLoading } = useContext(GeneralContext);
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormType>();

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
              disabled={isLoading}
            >Create new list</Button>
          )
          : (
            <form onSubmit={handleSubmit(onSubmit)}>
              <HStack alignItems='flex-end'>
                <Input
                  placeholder='Enter your task...'
                  {...register('name', { required: 'Please enter a list name' })}
                />
                <ButtonGroup>
                  <Button
                    colorPalette='green'
                    type='submit'
                    disabled={isLoading}
                  >Add</Button>
                  <Button
                    colorPalette='red'
                    onClick={onClickCancel}
                    disabled={isLoading}
                  >Cancel</Button>
                </ButtonGroup>
              </HStack>
              <Text color='red.500'>{errors?.name?.message}</Text>
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
