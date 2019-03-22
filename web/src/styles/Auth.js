import styled from "styled-components";

export const AuthDropStyle = styled.div`
  background: #00000087;
  z-index: 3;
  min-height: 100vh;
  position: absolute;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    font-size: 1.6rem;
    border-radius: 3px;
    background: ${props => props.theme.white};
    width: 40%;
    padding: 4rem 6rem;
    position: relative;
    .close {
      width: 40px;
      position: absolute;
      top: 0;
      right: 0;
      background: ${props => props.theme.dark_gray_2};
      color: ${props => props.theme.white};
      padding: 1rem;
      border-radius: 50%;
      transform: translate(50%, -50%);
      cursor: pointer;
    }
    > h1 {
      font-size: 3rem;
    }
    > p {
      color: ${props => props.theme.gray_1};
      font-family: Light;
      margin-bottom: 2rem;
    }
    > form {
      button {
        margin-bottom: 1rem;
        margin-top: 2.5rem;
      }
    }
    button {
      width: 100%;
      padding: 1rem;
    }
  }
`;
