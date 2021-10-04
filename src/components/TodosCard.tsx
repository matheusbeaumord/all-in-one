import React from 'react';
import Todos from '../models/todos';
import { BiTrash, BiEditAlt } from 'react-icons/bi';
import styled from 'styled-components';
import { Card } from '@material-ui/core';

const TodoItemList = styled(Card)`
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 0 0.5rem 0  0.5rem ;
  margin: 0.5rem 0 ;
  justify-content: space-between;
  font-size: var(--font-large);
  line-height: 2.5rem;
  border-radius: 10px;
`;

const TrashItem = styled.div`
  height: 2.3rem;
  :hover {
    cursor: pointer;
  }
`;
interface TodosProps {
  todos: Todos;
  handleDelete: (e: React.FormEvent, todoId: number) => void;
  handleEdit: (e: React.FormEvent, todoId: number) => void;
}

const TodoItem: React.FC<TodosProps> = ({ todos, handleDelete, handleEdit }) => {
  const { userId, id, title, completed } = todos;

  return (
    <TodoItemList key={id}>
      <h6>{title}</h6>
      <TrashItem
        className=""
        //   onClick={handleEdit}
      >
        <BiTrash onClick={(e) => handleDelete(e, id)} className="trash-icon" />
        <BiEditAlt onClick={(e) => handleEdit(e, id)} className="trash-icon" />

        {/* <i className="" /> */}
      </TrashItem>
    </TodoItemList>
  );
};

export default TodoItem;
