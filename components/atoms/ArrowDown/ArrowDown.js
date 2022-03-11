import styled from "styled-components";
import { ImageComponent } from "../ImageComponent/ImageComponent";

const propsLogo = {
    src: "assets/arrow-down.svg",
    alt: "arrow-down",
};
const ArrowSize = styled.div`
  width: 2em;
`;
export const ArrowDown = () => {
    return (
        <ArrowSize>
            <ImageComponent props={ propsLogo }> </ImageComponent>
        </ArrowSize>
    );
};