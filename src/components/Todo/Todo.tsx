import { useContext } from 'react';
import { Button, CheckboxCard, HStack } from '@chakra-ui/react';
import { GeneralContext } from '@/context';
import { HiOutlineTrash } from 'react-icons/hi';
import type { TodoType } from '../types';

export const Todo = ({
  todo: { description, isCompleted },
  onToggleTodoCompleted,
  onDeleteTodo
}: TodoProps) => {
  const { isLoading } = useContext(GeneralContext);

  const handleOnToggleTodoCompleted = () => {
    onToggleTodoCompleted(!isCompleted)
  }

  return (
    <HStack width='100%'>
      <CheckboxCard.Root checked={isCompleted} onClick={handleOnToggleTodoCompleted}>
        <CheckboxCard.HiddenInput />
        <CheckboxCard.Control>
          <CheckboxCard.Content>
            <CheckboxCard.Label>{description}</CheckboxCard.Label>
          </CheckboxCard.Content>
          <CheckboxCard.Indicator />
        </CheckboxCard.Control>
      </CheckboxCard.Root>
      <Button
        onClick={onDeleteTodo}
        disabled={isLoading}
        variant='ghost'
        title='Delete'
        padding={0}
      >
        <HiOutlineTrash />
      </Button>
    </HStack>
  );
}

type TodoProps = {
  todo: TodoType;
  onToggleTodoCompleted: (isCompleted: boolean) => void;
  onDeleteTodo: () => void;
}