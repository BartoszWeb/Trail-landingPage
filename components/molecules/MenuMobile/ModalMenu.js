import { useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { MenuNav } from "./ModalMenu.styles";
import { ListItem } from "./ModalMenu.styles";
import { StyledButton } from "./ModalMenu.styles";
import { StyledButtonSignUp } from "./ModalMenu.styles";
import { StyledButtonLogin } from "./ModalMenu.styles";
import { HamburgerContext } from "../../../contexts/HamburgerContext";

export const ModalMenu = () => {
    const nav = useRef();
    
    const context = useContext(HamburgerContext);
    const activeMenuMobile = context.activeMobileMenu;
    const closeMobileMenu = context.closeMobileMenu;
    
    useEffect(() => {
        activeMenuMobile
            ? nav.current.classList.add("active")
            : nav.current.classList.remove("active");
    }, [activeMenuMobile]);
    
    return (
        <MenuNav ref={ nav }>
            <ul>
                <ListItem>
                    <Link passHref id="link" href="/">
                        <StyledButton onClick={ closeMobileMenu }>Home</StyledButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link passHref id="link" href="/#how-it-works">
                        <StyledButton onClick={ closeMobileMenu }>How it works</StyledButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link passHref id="link" href="/#use-cases">
                        <StyledButton onClick={ closeMobileMenu }>Use Cases</StyledButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link passHref id="link" href="/#our-team">
                        <StyledButton onClick={ closeMobileMenu }>Our Team</StyledButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link passHref id="link" href="/#blog">
                        <StyledButton onClick={ closeMobileMenu }>Blog</StyledButton>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link passHref id="link" href="/#contact">
                        <StyledButton onClick={ closeMobileMenu }>Contact</StyledButton>
                    </Link>
                </ListItem>
                <ListItem style={ { marginTop: "50px" } }>
                    <Link passHref href="/signup">
                        <StyledButtonSignUp onClick={ closeMobileMenu }>Sign up free</StyledButtonSignUp>
                    </Link>
                </ListItem>
                <ListItem>
                    <Link passHref href="/login">
                        <StyledButtonLogin onClick={ closeMobileMenu }>Login</StyledButtonLogin>
                    </Link>
                </ListItem>
            </ul>
        </MenuNav>
    );
};