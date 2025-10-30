import { Button, ButtonGroup, HStack, Input, Text } from '@chakra-ui/react'
import { useForm } from 'react-hook-form';

export const EditTodoList = ({ originalName, onEditTodoList, onToggleEditMode }: EditTodoListProps) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormType>({
    defaultValues: { name: originalName }
  });

  const onSubmit = ({ name }: FormType) => {
    onEditTodoList(name);
    reset({ name: '' });
    onToggleEditMode();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{ marginBottom: '12px' }}>
      <HStack alignItems='flex-end'>
        <Input
          placeholder='Enter your list name...'
          {...register('name', { required: 'Please enter a list name' })}
        />
        <ButtonGroup>
          <Button colorPalette='green' type='submit'>Add</Button>
          <Button colorPalette='red' onClick={onToggleEditMode}>Cancel</Button>
        </ButtonGroup>
      </HStack>
      <Text color='red.500'>{errors?.name?.message}</Text>
    </form>
  )
}

type FormType = {
  name: string;
}

type EditTodoListProps = {
  originalName: string;
  onEditTodoList: (name: string) => void;
  onToggleEditMode: () => void;
}
