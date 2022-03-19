import { NavigationDesktop } from "./Navigation.styles";
import { MenuDesktop } from "../../molecules/MenuDesktop/MenuDesktop";
import { SignPanelDesktop } from "../../molecules/SignPanelDesktop/SignPanelDesktop";
import { useContext, useEffect } from "react";
import { HamburgerContext } from "../../../contexts/HamburgerContext";
import { animated, useTransition } from "react-spring";
import { ModalMenu } from "../MenuMobile/ModalMenu";
import {
    ListItem,
    ListWrapper,
    NavContainer,
    StyledLogo,
    NavigationMobile
} from "./Navigation.styles";
import Link from "next/link";
import { Logo } from "../../atoms/Logo/Logo";
import { Hamburger } from "../../atoms/Hamburger/Hamburger";

export const Navigation = () => {
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
            <NavigationDesktop>
                <MenuDesktop/>
                <SignPanelDesktop/>
            </NavigationDesktop>
            
            <NavigationMobile>
                <NavContainer>
                    <ListWrapper>
                        <ListItem>
                            <Link passHref href="/">
                                <StyledLogo onClick={ closeMobileMenu }>
                                    <Logo/>
                                </StyledLogo>
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Hamburger/>
                        </ListItem>
                    </ListWrapper>
                </NavContainer>
                {
                    transition(
                        (style, activeMobileMenu) => activeMobileMenu &&
                            <AnimatedMenuMobile style={ style }/>
                    )
                }
            </NavigationMobile>
        </>
    );
};