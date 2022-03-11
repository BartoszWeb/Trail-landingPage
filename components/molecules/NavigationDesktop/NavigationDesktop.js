import { NavWrapper } from "./Navigation.styles";
import { MenuDesktop } from "../MenuDesktop/MenuDesktop";
import { SignPanelDesktop } from "../SignPanelDesktop/SignPanelDesktop";

export const NavigationDesktop = () => {
    return (
        <NavWrapper>
            <MenuDesktop/>
            <SignPanelDesktop/>
        </NavWrapper>
    );
};