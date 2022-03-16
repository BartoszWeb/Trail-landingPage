import styled from "styled-components";

export const ButtonLogin = styled.a`
  background-color: ${ ({ theme }) => theme.colors.tertiaryColor };
  font-weight: 400;
  padding: 1em 2em;
  border: none;
  cursor: pointer;


  &:hover {
    background-color: white;
    color: #ffde00;
`;