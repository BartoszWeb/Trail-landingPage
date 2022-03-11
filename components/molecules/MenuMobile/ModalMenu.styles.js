import styled from "styled-components";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";
import { ButtonLogin } from "../../atoms/ButtonLogin/ButtonLogin";

export const MenuNav = styled.nav`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  pointer-events: all;
  opacity: 0;
  transition: opacity .1s .1s ease-in-out;

  &.active {
    opacity: 1;
    transition: opacity .1s .1s ease-in-out;
    z-index: 9;
  }
`;

export const ListItem = styled.li`
  display: block;
  margin: 0 10px;
  list-style: none;
  text-align: center;
`;

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  width: 200px;
  padding: 20px;
  font-size: 20px;
  background-color: white;
  border: none;

  :hover {
    background-color: ${ ({ theme }) => theme.colors.primaryColor };
    border-radius: 5px;
  }

`;
export const StyledButtonSignUp = styled(ButtonSignUp)`
  display: flex;
  justify-content: center;
  width: 200px;
  padding: 20px;
  font-size: 20px;
`;

export const StyledButtonLogin = styled(ButtonLogin)`
  display: flex;
  justify-content: center;
  width: 200px;
  padding: 20px;
  font-size: 20px;
`;