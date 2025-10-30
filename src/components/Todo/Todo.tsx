import { CheckboxCard } from '@chakra-ui/react';
import type { TodoType } from '../types';

export const Todo = ({ todo: { description, isCompleted }, onToggleTodoCompleted }: TodoProps) => {
  const handleOnToggleTodoCompleted = () => {
    onToggleTodoCompleted(!isCompleted)
  }

  return (
    <CheckboxCard.Root width='100%' checked={isCompleted} onClick={handleOnToggleTodoCompleted}>
      <CheckboxCard.HiddenInput />
      <CheckboxCard.Control>
        <CheckboxCard.Content>
          <CheckboxCard.Label>{description}</CheckboxCard.Label>
        </CheckboxCard.Content>
        <CheckboxCard.Indicator />
      </CheckboxCard.Control>
    </CheckboxCard.Root>
  );
}

type TodoProps = {
  todo: TodoType;
  onToggleTodoCompleted: (isCompleted: boolean) => void;
}