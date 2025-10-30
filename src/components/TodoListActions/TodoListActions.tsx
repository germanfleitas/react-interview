import { useContext } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { HiOutlinePencilAlt, HiOutlineTrash, HiOutlineCheck } from 'react-icons/hi';
import { GeneralContext } from '@/context';

export const TodoListActions = ({
  onClickCompleteList,
  onClickEditList,
  onClickDeleteList
}: TodoListActionsProps) => {
  const { isLoading } = useContext(GeneralContext);

  return (
    <ButtonGroup justifyContent='end'>
      <Button
        onClick={onClickCompleteList} 
        disabled={isLoading}
        variant='ghost'
        title='Complete list'
        padding={0}
      >
        <HiOutlineCheck />
      </Button>
      <Button
        onClick={onClickEditList} 
        disabled={isLoading}
        variant='ghost'
        title='Edit'
        padding={0}
      >
        <HiOutlinePencilAlt />
      </Button>
      <Button
        onClick={onClickDeleteList} 
        disabled={isLoading}
        variant='ghost'
        title='Delete'
        padding={0}
      >
        <HiOutlineTrash />
      </Button>
    </ButtonGroup>
  );
}

type TodoListActionsProps = {
  onClickCompleteList: () => void;
  onClickEditList: () => void;
  onClickDeleteList: () => void;
}
