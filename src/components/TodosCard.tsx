import React from 'react';
import Todos from '../models/todos';
import { BiTrash, BiEditAlt } from 'react-icons/bi';
import styled from 'styled-components';
import { Card, Checkbox } from '@material-ui/core';

const TodoItemList = styled(Card)`
  width: 50rem;
  display: flex;
  flex-direction: row;
  padding: 0 0.5rem 0 0.5rem;
  margin: 0.5rem 0;
  justify-content: space-between;
  font-size: var(--font-large);
  line-height: 2.5rem;
  border-radius: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 8rem;
  justify-content: space-between;
  padding: 0.5rem 0 0.5rem;
  height: 2.3rem;
  div{
  :hover {
    cursor: pointer;
  }
  }
`;
interface TodosProps {
  todos: Todos;
  handleDelete: (e: React.FormEvent, todoId: number) => void;
  handleEdit: (e: React.FormEvent, todoId: number) => void;
  handleCompleted: (e: React.FormEvent, todoId: number) => void;
}

const TodoItem: React.FC<TodosProps> = ({
  todos,
  handleDelete,
  handleEdit,
  handleCompleted,
}) => {
  const { userId, id, title, completed } = todos;

  return (
    <TodoItemList key={id}>
      <h6>{title}</h6>
      <ButtonContainer>
        <div>
          <BiTrash
            onClick={(e) => handleDelete(e, id)}
            className="trash-icon"
          />
        </div>
        <div>
          <BiEditAlt
            onClick={(e) => handleEdit(e, id)}
            className="trash-icon"
          />
        </div>
        <div>
          <Checkbox
            checked={completed}
            color="primary"
            onClick={(e) => handleCompleted(e, id)}
          />
        </div>
      </ButtonContainer>
    </TodoItemList>
  );
};

export default TodoItem;
