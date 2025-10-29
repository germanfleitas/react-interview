import { Button, ButtonGroup, EmptyState as ChakraUIEmptyState, VStack } from '@chakra-ui/react'
import { HiClipboardCheck } from 'react-icons/hi'


export const EmptyState = () => {
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
        <ButtonGroup>
          <Button>Create new TODO list</Button>
        </ButtonGroup>
      </ChakraUIEmptyState.Content>
    </ChakraUIEmptyState.Root>
  )
}
