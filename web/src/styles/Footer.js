import styled from "styled-components";

export const FooterStyle = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 4rem 8rem;
  @media (max-width: 900px) {
    padding: 4rem 3rem;
  }
  .links {
    display: flex;
    align-self: center;
    list-style: none;

    font-size: 1.3rem;
    span {
      margin: 0 2.8rem;
    }
  }
`;
