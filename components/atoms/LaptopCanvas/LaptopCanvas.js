import { IframeSVG, WrapperSVG } from "./LaptopCanvas.styles";

export const LaptopCanvas = () => {
    return (
        <WrapperSVG>
            <IframeSVG
                src="https://www.youtube.com/embed/4UZrsTqkcW4?autoplay=1&mute=1"
                allow="autoplay; encrypted-media"
                frameborder="0"
                allowfullscreen
            />
        </WrapperSVG>
    );
};