import { useContext, useEffect, useRef } from "react";
import Link from "next/link";
import { List, MenuNav, StyledButtonDashboard, StyledButtonDemo } from "./ModalMenu.styles";
import { ListItem } from "./ModalMenu.styles";
import { StyledButton } from "./ModalMenu.styles";
import { StyledButtonSignUp } from "./ModalMenu.styles";
import { StyledButtonLogin } from "./ModalMenu.styles";
import { HamburgerContext } from "../../../contexts/HamburgerContext";
import { useSession } from "next-auth/react";
import { logOutHandler } from "../../../helpers/logout";

export const ModalMenu = () => {
    const { status } = useSession();
    const nav = useRef();
    
    const context = useContext(HamburgerContext);
    const activeMenuMobile = context.activeMobileMenu;
    const closeMobileMenu = context.closeMobileMenu;
    
    useEffect(() => {
        activeMenuMobile
            ? nav.current.classList.add("active")
            : nav.current.classList.remove("active");
    }, [activeMenuMobile]);
    
    useEffect(() => {
        const list = nav.current;
        
        function handleClick(e) {
            if (e.target === list || list.firstChild) {
                closeMobileMenu();
            }
        }
        
        list.addEventListener("click", handleClick);
        
        return () => removeEventListener("click", handleClick);
    }, []);
    
    
    if (status === "authenticated") {
        return (
            <MenuNav ref={ nav }>
                <List>
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
                    <ListItem margin="0.5em 0.3em 0.2em 0.3em">
                        <StyledButtonLogin onClick={ logOutHandler }>LogOut</StyledButtonLogin>
                    </ListItem>
                    
                    <ListItem>
                        <Link passHref id="link" href="/app">
                            <StyledButtonDashboard>Dashboard</StyledButtonDashboard>
                        </Link>
                    </ListItem>
                </List>
            </MenuNav>
        );
    }
    return (
        <MenuNav ref={ nav }>
            <List>
                <ListItem>
                    <Link passHref id="link" href="/demo">
                        <StyledButtonDashboard onClick={ closeMobileMenu }>Demo App</StyledButtonDashboard>
                    </Link>
                </ListItem>
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
                <ListItem>
                    <Link passHref href="/signup">
                        <StyledButtonSignUp>Sign Up</StyledButtonSignUp>
                    </Link>
                </ListItem>
                <ListItem margin="0.5em 0.3em 0 0.3em">
                    <Link passHref href="/login">
                        <StyledButtonLogin>Log In</StyledButtonLogin>
                    </Link>
                </ListItem>
            </List>
        </MenuNav>
    );
};