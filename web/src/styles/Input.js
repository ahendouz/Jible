import styled from "styled-components";

export const InputStyle = styled.div`
  .info {
    font-size: 1.3rem;
    font-family: Light;
    color: ${props => props.theme.gray_1};
  }
  .input {
    position: relative;
    input {
      background: none;
      border: 1px solid ${props => props.theme.gray_2};
      border-radius: 2px;
      padding: 1rem 1.5rem 1rem 4.5rem;
      width: 100%;
      font-size: 1.3rem;
      font-family: Regular;
      outline: none;
      &::placeholder {
        color: ${props => props.theme.gray_3};
        font-family: Regular;
      }
    }
    svg {
      position: absolute;
      left: 3.3%;
      bottom: 29%;
      width: 14px;
      height: 14px;
      color: ${props => props.theme.dark_gray_1};
    }
  }
  &:not(:last-child) {
    margin-bottom: 1.7rem;
  }
`;
