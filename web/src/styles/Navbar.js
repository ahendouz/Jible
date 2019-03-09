import styled from "styled-components";

export const NavbarStyle = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  width: 100%;
  padding: 3.6rem 8rem;
  display: flex;
  justify-content: space-between;
  .logo {
    width: 100px;
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
