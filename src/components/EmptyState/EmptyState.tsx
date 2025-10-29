import { Button, EmptyState as ChakraUIEmptyState, VStack } from '@chakra-ui/react'
import { HiClipboardCheck } from 'react-icons/hi'
import type { MouseEventHandler } from 'react'

export const EmptyState = ({ onClickCreateNewTodoList }: EmptyStateProps) => {
  return (
    <ChakraUIEmptyState.Root>
      <ChakraUIEmptyState.Content>
        <ChakraUIEmptyState.Indicator>
          <HiClipboardCheck />
        </ChakraUIEmptyState.Indicator>
        <VStack textAlign='center'>
          <ChakraUIEmptyState.Title>Start adding pending tasks!</ChakraUIEmptyState.Title>
          <ChakraUIEmptyState.Description>
            Add a new list to get started
          </ChakraUIEmptyState.Description>
        </VStack>
        <Button onClick={onClickCreateNewTodoList}>Create new TODO list</Button>
      </ChakraUIEmptyState.Content>
    </ChakraUIEmptyState.Root>
  )
}

type EmptyStateProps = {
  onClickCreateNewTodoList: MouseEventHandler<HTMLButtonElement>;
}
