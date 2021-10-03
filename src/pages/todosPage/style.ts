import styled from 'styled-components';
import { Input } from '@material-ui/core';

export const Section = styled.section`
  margin: 47px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .supplement-container-btn {
    max-width: 450px;
    width: 100%;
    margin: 20px 0;
  }

  .supplement-recommendations {
    margin: 40px 0;

    .supplement-info {
      margin: 20px 0;
    }
  }

  .supplement-more-info {
    strong {
      font-weight: 700;
      text-transform: uppercase;
      margin-right: 6px;
    }

    .nutricional_information {
      margin: 40px 0;
    }
  }

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    .supplement-thumbs {
      max-width: 100%;
      width: initial;
      padding: 0 20px;

      img {
        max-width: 100%;
      }
      h2 {
        font-size: 38px;
      }
      h3 {
        margin-top: 0;
      }

      h2,
      h3 {
        display: block;
        display: flex;
        justify-content: center;
      }
    }

    .supplement-content {
      margin-left: 0;
      padding: 0 20px;
      h2,
      h3 {
        display: none;
      }
    }

    .supplement-container-btn {
      max-width: 100%;
      display: flex;
      justify-content: center;
    }
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

`