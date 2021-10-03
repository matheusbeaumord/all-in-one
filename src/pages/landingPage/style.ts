import styled, { css } from 'styled-components';
import MaterialButton, { ButtonProps } from '@material-ui/core/Button';
import { MenuItem } from '@material-ui/core';

export const Container = styled.div`
  top: 0;
  left: 0;
  right: 0;
  background-color: #f5f9fc;
  background-size: contain;
  background-repeat: no-repeat;

  @media only screen and (min-width: 1700px) {
    background-size: 100% 38%, contain, 0em;
  }

  @media only screen and (max-width: 600px) {
    padding-top: 65px;
  }
`;

export const Features = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 100px 40px;
  background-color: #f5f9fc;

  .title {
    display: flex;
    flex: 1;
    justify-content: center;
    flex-direction: column;
  }

  h2 {
    line-height: 62px;
    max-width: 457px;
    font-size: 46px;
    font-weight: 300;

    strong {
      font-weight: 700;
    }
  }

  /* .container-btn {
    margin-top: 60px;
    max-width: 417px;
    position: relative;
    z-index: 10;
  } */

  .signup-text {
    /* display: none; */
  }

  @media only screen and (max-width: 800px) {
    h2 {
      line-height: 40px;
      max-width: 457px;
      font-size: 29px;
      font-weight: 300;
      color: var(--black-lighter);
      margin-bottom: 30px;

      strong {
        font-weight: 700;
      }
    }
    padding: 40px 20px;

    .features-container {
      flex-direction: column;
      align-items: center;
    }

    .signup-text {
      display: block;
      color: var(--blue-medium);
      font-size: 20px;
      line-height: 30px;
      font-weight: 700;
      text-align: center;
      margin: 30px 0;
    }

    .container-btn {
      display: flex;
      max-width: inherit;
      width: 100%;
    }
  }
`;

export const LoginButton = styled.button`
  background: #3498dbbb;
  color: white;
  font-weight: bold;
  outline: none;
  border: none;
  cursor: pointer;
  padding: 8px;
  min-width: 40px;
  min-height: 40px;
  transition: all 0.5s;

  :hover {
    background: #3498db;
  }
`;

export interface IButtonProps extends ButtonProps {
  isLoading?: boolean;
  onClick?: any;
  flat?: boolean;
  round?: number;
}

export const ButtonWrapper = styled(MaterialButton)`
  ${({ round }: IButtonProps) => css`
        height: 50px;
    
      .MuiButton-label {
        border-bottom: 1px solid ${'white'};
        line-height: 1;
        font-weight: bold;
        font-size: 1.0rem;
      }

      &.MuiButton-text {
        border: 1px solid transparent;
        &:hover {
          border-color: white;
        }
      }

  }

      @media (max-width: 480px) {
        ${
          round &&
          css`
            border-radius: 100%;
            padding: 0;
            height: 36px;
            width: 36px;
          `
        }

        .MuiButton-label {
          font-size: 1.0rem;

          svg {
            font-size: 1.0rem;
          }
        }
      }
    }
  `}
`;

export const MenuItemWrapper = styled(MenuItem)`
  align-items: center;
  text-transform: uppercase;
  font-size: 1.1rem;
  margin: 0 16px;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
    overflow: hidden;
  }

  input {
    display: none;
  }
`;
