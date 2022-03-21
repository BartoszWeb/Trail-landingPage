import { useContext } from "react";
import { HamburgerContext } from "../../contexts/HamburgerContext";
import { Navigation } from "../organisms/Navigation/Navigation";
import { Content } from "./MainTemplate.style";
import Notification from "../organisms/Notification/Norification";
import NotificationContext from "../../contexts/NotificationContext";

export const MainTemplate = ({ children }) => {
    const context = useContext(HamburgerContext);
    const notificationContext = useContext(NotificationContext);
    
    const activeNotification = notificationContext.notification;
    const menuMobileActive = context.activeMobileMenu;
    
    return (
        <>
            <Navigation/>
            <Content className={ menuMobileActive && "hidden" }>{ children }</Content>
            {
                activeNotification && (
                    <Notification title={ activeNotification.title } message={ activeNotification.message }
                                  status={ activeNotification.status }/>)
            }
        </>
    );
};