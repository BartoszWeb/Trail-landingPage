import styled from "styled-components";

export const Content = styled.main`
  width: 100%;
  margin: 2em auto 0 auto;

  @media (max-width: 1000px) {
    margin-top: 5em;
  }

  &.hidden {
    visibility: hidden;
  }
`;