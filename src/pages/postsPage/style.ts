import styled from 'styled-components';
import { Button, Input, TextField} from '@material-ui/core';

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  font-weight: 300;
  strong {
      font-weight: 700;
    }
`;

export const Description = styled.h3`
  color: var(--grey-darker);
  text-transform: uppercase;
  font-size: 18px;
  line-height: 41px;
  margin-top: 18px;
  display: none;
`;

export const InputComponent = styled(Input)`
  width: 40rem;
  padding: 2rem 0 2rem 0;
`;

export const TextFilef = styled(TextField)`
width: 40rem;
height: 7.5rem;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* padding: 2rem 0 2rem 0; */
`;

export const ButtonContent = styled(Button)`
`;

export const TodosContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;
