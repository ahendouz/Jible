import styled from "styled-components";

const button = styled.button`
  border: none;
  padding: 1rem;
  font-family: Light;
  font-size: 1.4rem;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
`;

export const BtnGreenStyle = styled(button)`
  background: ${props => props.theme.green};
  color: white;
`;
export const BtnWhiteStyle = styled(button)`
  background: ${props => props.theme.white};
  color: black;
`;
export const BtnBlueStyle = styled(button)`
  background: ${props => props.theme.blue};
  color: white;
  font-size: 1.5rem;
`;
export const BtnFbStyle = styled(button)`
  background: ${props => props.theme.blueFb};
  color: white;
  font-size: 1.5rem;
`;
