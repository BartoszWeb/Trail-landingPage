import styled from "styled-components";
import { ButtonLogin } from "../../atoms/ButtonLogin/ButtonLogin";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";
import Link from "next/link";

const SignPanelWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;


export const SignPanelDesktop = () => {
    return (
        <SignPanelWrapper>
            <li>
                <Link href={ "/login" } passHref>
                    <ButtonLogin>Login</ButtonLogin>
                </Link>
            </li>
            <li>
                <Link href={ "/signup" } passHref>
                    <ButtonSignUp>Sing up</ButtonSignUp>
                </Link>
            </li>
        </SignPanelWrapper>
    );
};