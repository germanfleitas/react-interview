import { Button, ButtonGroup } from "@chakra-ui/react";
import { HiOutlinePencilAlt, HiOutlineTrash, HiOutlineCheck } from "react-icons/hi";

export const TodoListActions = ({
  onClickCompleteList,
  onClickEditList,
  onClickDeleteList
}: TodoListActionsProps) => {
  return (
    <ButtonGroup justifyContent='end'>
      <Button onClick={onClickCompleteList}  variant='ghost' title='Complete list'>
        <HiOutlineCheck />
      </Button>
      <Button onClick={onClickEditList}  variant='ghost' title='Edit'>
        <HiOutlinePencilAlt />
      </Button>
      <Button onClick={onClickDeleteList}  variant='ghost' title='Delete'>
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
