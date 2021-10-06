import React from 'react';
import IAlbums from '../models/albums';
import { BiTrash, BiEditAlt } from 'react-icons/bi';
import styled from 'styled-components';
import { Card } from '@material-ui/core';

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
  justify-content: space-around;
  padding: 0.5rem 0 0.5rem;
  height: 2.3rem;
  div{
  :hover {
    cursor: pointer;
  }
  }
`;
interface TodosProps {
  albums: IAlbums;
  handleDelete: (e: React.FormEvent, todoId: number) => void;
  handleEdit: (e: React.FormEvent, todoId: number) => void;
}

const AlbumCard: React.FC<TodosProps> = ({
  albums,
  handleDelete,
  handleEdit,
}) => {
  const { userId, id, title } = albums;

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
      </ButtonContainer>
    </TodoItemList>
  );
};

export default AlbumCard;
