import styled from 'styled-components';
import { Button, Input } from '@material-ui/core';

export const Section = styled.section`
  margin: 47px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  line-height: 40px;
  color: var(--blue-water);
  font-weight: 800;
  text-transform: uppercase;
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

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem 0 2rem 0;
`;

export const ButtonContent = styled(Button)`
  
`;
