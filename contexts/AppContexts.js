import { ThemeContext } from "./ThemeContext";
import { HamburgerContextProvider } from "./HamburgerContext";
import { NotificationContextProvider } from "./NotificationContext";


export function AppContexts(props) {
    return (
        <ThemeContext>
                <NotificationContextProvider>
                    <HamburgerContextProvider>
                        { props.children }
                    </HamburgerContextProvider>
                </NotificationContextProvider>
        </ThemeContext>
    );
}