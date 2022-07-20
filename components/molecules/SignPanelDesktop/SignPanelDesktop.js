import styled from "styled-components";
import { ButtonLogin } from "../../atoms/ButtonLogin/ButtonLogin";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";
import Link from "next/link";
import { ButtonDashboard } from "../../atoms/ButtonDashboard/ButtonDashboard";
import { useSession } from "next-auth/react";
import { logOutHandler } from "../../../helpers/logout";

const SignPanelWrapper = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;


export const SignPanelDesktop = () => {
    const { status } = useSession();
    if (status === "loading") {
        return (
            <SignPanelWrapper/>
        );
    }
    
    if (status === "authenticated") {
        return (
            <SignPanelWrapper>
                <li>
                    <ButtonLogin onClick={ logOutHandler }>Log out</ButtonLogin>
                
                </li>
                <li>
                    <Link href={ "/app" } passHref>
                        <ButtonDashboard>Dashboard</ButtonDashboard>
                    </Link>
                </li>
            </SignPanelWrapper>
        );
    }
    
    
    return (
        <SignPanelWrapper>
            <li>
                <Link href={ "/demo" } passHref>
                    <ButtonDashboard>Demo App</ButtonDashboard>
                </Link>
            </li>
            <li>
                <Link href={ "/login" } passHref>
                    <ButtonLogin>Log In</ButtonLogin>
                </Link>
            </li>
            <li>
                <Link href={ "/signup" } passHref>
                    <ButtonSignUp>Sign Up</ButtonSignUp>
                </Link>
            </li>
        </SignPanelWrapper>
    );
};