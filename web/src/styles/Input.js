import styled from "styled-components";

export const InputStyle = styled.div`
  .input {
    position: relative;
    input {
      background: none;
      border: 1px solid ${props => props.theme.gray_2};
      border-radius: 2px;
      padding: 1rem 1.5rem 1rem 3.4rem;
      width: 100%;
      font-size: 1.3rem;
      font-family: Regular;
      outline: none;
      &::placeholder {
        color: ${props => props.theme.dark_gray_1};
        font-family: Regular;
      }
    }
    svg {
      position: absolute;
      left: 2%;
      top: 20%;
      width: 20px;
      color: ${props => props.theme.dark_gray_1};
    }
  }
  &:not(:last-child) {
    margin-bottom: 1rem;
  }
`;
