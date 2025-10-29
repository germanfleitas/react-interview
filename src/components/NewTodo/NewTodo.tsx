import { useState } from 'react';
import { Box, Button, ButtonGroup, Input, VStack } from '@chakra-ui/react'
import type { MouseEventHandler } from 'react';

export const NewTodo = ({ onClickCreateNewTodo }: NewTodoProps) => {
  const [showCreateButton, setShowCreateButton] = useState<boolean>(true);

  const onClickAddNewTask = () => {
    setShowCreateButton(false);
  };

  const onClickCancel = () => {
    setShowCreateButton(true);
  };

  return (
    <Box>
      {
        showCreateButton
          ? <Button width='100%' variant='outline' onClick={onClickAddNewTask}>Add a new task</Button>
          : (
            <VStack alignItems='flex-end'>
              <Input
                placeholder='Enter your task...'
              />
              <ButtonGroup>
                <Button colorPalette='green' onClick={onClickCreateNewTodo}>Add</Button>
                <Button colorPalette='red' onClick={onClickCancel}>Cancel</Button>
              </ButtonGroup>
            </VStack>
          )
      }
    </Box>
  )
}

type NewTodoProps = {
  onClickCreateNewTodo: MouseEventHandler<HTMLButtonElement>
}
