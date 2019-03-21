import styled from "styled-components";

export const NavbarStyle = styled.nav`
  height: 15vh;
  width: 100%;
  padding: 0 8rem;
  @media (max-width: 900px) {
    padding: 0 3rem;
  }
  display: flex;
  justify-content: space-between;
  .logo {
    width: 100px;
    align-self: center;
    > img {
      width: 100%;
    }
  }
  .navbar_state {
    align-self: center;
    .navbar_unauthorized {
      display: flex;
      .btns {
        @media (max-width: 900px) {
          button {
            padding: 0.7rem 1.1rem !important;
          }
        }
        button {
          font-size: 1.5rem;
          padding: 0.8rem 5rem;
          &:last-of-type {
            margin-left: 2rem;
          }
        }
      }
    }
    .navbar_authorized {
      display: flex;
      align-items: center;
      > svg {
        width: 22px;
        margin-right: 2rem;
      }
      > div {
        width: 30px;
        border-radius: 50%;
        overflow: hidden;
        margin-right: 1rem;
        img {
          width: 100%;
          vertical-align: top;
        }
      }
      p {
        font-size: 1.2rem;
        position: relative;
        @media (max-width: 700px) {
          margin-right: 4rem;
        }
        &:hover .dropDown {
          visibility: visible;
        }
        .dropDown {
          position: absolute;
          top: 96%;
          right: 0%;
          width: 100px;
          visibility: hidden;
          > button {
            background: ${props => props.theme.gray_2};
            width: 100%;
          }
        }
      }
    }
  }
`;
