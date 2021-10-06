import React from 'react';
import IPosts from '../models/posts';
import { BiTrash, BiEditAlt, BiChevronDown } from 'react-icons/bi';
import styled from 'styled-components';
import { Card, IconButton, Collapse } from '@material-ui/core';

const PostItemList = styled(Card)`
  width: 50rem;
  display: flex;
  flex-direction: row;
  padding: 0 0.5rem 0 0.5rem;
  margin: 0.5rem 0;
  justify-content: space-between;
  align-items: center;
  font-size: var(--font-large);
  line-height: 2.5rem;
  border-radius: 10px;
`;

const PostContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const BodyContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-right: 1.5rem;
  p {
    font-size: 0.8rem;
    text-align: justify;
    line-height: 1.5rem;
    word-break: break-all;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  width: 4rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0 0.5rem;
  height: 2.3rem;
  div {
    :hover {
      cursor: pointer;
    }
  }
`;

interface TodosProps {
  posts: IPosts;
  handleDelete: (e: React.FormEvent, todoId: number) => void;
  handleEdit: (e: React.FormEvent, todoId: number) => void;
}

const PostCard: React.FC<TodosProps> = ({
  posts,
  handleDelete,
  handleEdit,
}) => {
  const [expanded, setExpanded] = React.useState(false);

  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions?.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const { userId, id, title, body } = posts;

  return (
    <PostItemList key={id}>
      <PostContent>
        <h6>{title}</h6>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <BiChevronDown />
          </ExpandMore>
        <BodyContent>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <p>{body}</p>
          </Collapse>
        </BodyContent>
      </PostContent>
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
    </PostItemList>
  );
};

export default PostCard;
