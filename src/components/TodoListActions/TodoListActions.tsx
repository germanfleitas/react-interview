import { Button, ButtonGroup } from "@chakra-ui/react";
import { HiOutlinePencilAlt, HiOutlineTrash, HiOutlineCheck } from "react-icons/hi";

export const TodoListActions = ({ onCompleteList, onEditList, onDeleteList }: TodoListActionsProps) => {
  return (
    <ButtonGroup justifyContent='end'>
      <Button onClick={onCompleteList}  variant='ghost' title='Complete list'>
        <HiOutlineCheck />
      </Button>
      <Button onClick={onEditList}  variant='ghost' title='Edit'>
        <HiOutlinePencilAlt />
      </Button>
      <Button onClick={onDeleteList}  variant='ghost' title='Delete'>
        <HiOutlineTrash />
      </Button>
    </ButtonGroup>
  );
}

type TodoListActionsProps = {
  onCompleteList: () => void;
  onEditList: () => void;
  onDeleteList: () => void;
}
