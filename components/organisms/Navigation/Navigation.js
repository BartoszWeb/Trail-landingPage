import { NavigationMobile } from "../../molecules/NavigationMobile/NavigationMobile";
import { NavigationDesktop } from "../../molecules/NavigationDesktop/NavigationDesktop";

export const Navigation = () => {
    return (
        <div>
            <NavigationDesktop/>
            <NavigationMobile />
        </div>
    );
};