import styled from "styled-components";

export const MenuContainer = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledLogo = styled.a`
  display: block;
  cursor: pointer;
  width: 150px;
  margin-top: -5px;
`;
export const StyledLink = styled.a`
  padding: 10px;
`;
export const ListItem = styled.li`
  margin: 0 0.25em;
  list-style: none;
  color: black;
  position: relative;

  :after {
    content: "";
    width: 0;
    height: 2px;
    position: absolute;
    top: 120%;
    left: 0;
    background-color: #ffde00;
    transition: width 0.5s;
  }

  :hover {
    transition: all 0.5s;
  }

  :hover:after {
    width: 100%;
  }
`;