import styled from "styled-components";

export const ButtonLogin = styled.a`
  background-color: ${ ({ theme }) => theme.colors.tertiaryColor };
  font-weight: 400;
  padding: 1em 2em;
  margin: 0 0.3em;
  border: none;
  cursor: pointer;
  border-radius: 5px;


  &:hover {
    background-color: #fbfbfb;
`;