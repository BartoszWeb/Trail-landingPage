import styled from "styled-components";

export const NavWrapper = styled.nav`
  width: 80vw;
  height: 15vh;
  margin: 1em auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1000px) {
    display: none;
  }
`;