import { ThemeProvider } from "styled-components";
import { theme } from "../styles/theme";

export function ThemeContext(props) {
    return (
        <ThemeProvider theme={ theme }>
            { props.children }
        </ThemeProvider>
    );
}