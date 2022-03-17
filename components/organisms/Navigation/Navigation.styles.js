import styled from "styled-components";

export const NavigationDesktop = styled.nav`
  width: 90vw;
  height: 15vh;
  margin: 1em auto;
  display: flex;
  justify-content: space-between;
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const NavContainer = styled.nav`
  display: none;
  width: 100%;
  position: fixed;
  top: 0;
  background-color: ${ ({ theme }) => theme.colors.secondaryColor };
  z-index: 10;
  padding: 0.9em 0;

  @media (max-width: 1100px) {
    display: block;
  }
`;


export const StyledLogo = styled.a`
  display: block;
  width: 90px;
  margin-top: -5px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`;

export const ListWrapper = styled.ul`
  display: flex;
  justify-content: space-between;
`;

export const ListItem = styled.li`
  margin: 0 0.35em;
  list-style: none;
  color: black;
`;

export const NavigationMobile = styled.div`
`