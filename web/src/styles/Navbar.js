import styled from "styled-components";

export const NavbarStyle = styled.nav`
  height: 10vh;
  width: 100%;
  padding: 0 8rem;
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
    }
  }
`;
