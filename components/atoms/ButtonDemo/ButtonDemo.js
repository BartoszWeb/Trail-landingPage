import styled from "styled-components";

export const ButtonDemo = styled.a`
  background-color: ${ ({ theme }) => theme.colors.accentColor };
  font-weight: 400;
  padding: 1em 2em;
  border: none;
  cursor: pointer;

  @media (max-width: 1200px) {
    padding: 0.5em 1em;
  }

  &:hover {
    background-color: rgb(228, 247, 255);
`;