import Link from "next/link";
import { useContext, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import { Logo } from "../../atoms/Logo/Logo";
import { Hamburger } from "../../atoms/Hamburger/Hamburger";
import { NavContainer, ListItem, ListWrapper, StyledLogo } from "./NavigationMobile.styles";
import { ModalMenu } from "../MenuMobile/ModalMenu";
import { HamburgerContext } from "../../../contexts/HamburgerContext";

export const NavigationMobile = () => {
    const context = useContext(HamburgerContext);
    const activeMenuMobile = context.activeMobileMenu;
    const closeMobileMenu = context.closeMobileMenu;
    
    const AnimatedMenuMobile = animated(ModalMenu);
    
    useEffect(() => {
        if (!activeMenuMobile) return;
        
        function keyHandler(e) {
            e.key === "Escape" && closeMobileMenu();
        }
        
        window.addEventListener("keydown", keyHandler);
        
        return () => {
            window.removeEventListener("keydown", keyHandler);
        };
    }, [activeMenuMobile]);
    
    const transition = useTransition(activeMenuMobile, {
        from: { opacity: "0", transitionDelay: 0 },
        leave: { opacity: "1", transitionDelay: 0 },
        config: {
            duration: 100,
        },
    });
    
    return (
        <>
            <NavContainer>
                <ListWrapper>
                    <ListItem>
                        <Link passHref href="/">
                            <StyledLogo>
                                <Logo/>
                            </StyledLogo>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Hamburger/>
                    </ListItem>
                </ListWrapper>
            </NavContainer>
            { transition(
                (style, activeMobileMenu) =>
                    activeMobileMenu &&
                    <AnimatedMenuMobile style={ style }/>
            ) }
        
        </>
    );
};