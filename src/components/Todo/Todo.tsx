import type { TodoType } from '../types';

export const Todo = ({ todo: { description } }: TodoProps) => {
  return (
    <div>
      <p>{description}</p>
    </div>
  );
}

type TodoProps = {
  todo: TodoType;
}