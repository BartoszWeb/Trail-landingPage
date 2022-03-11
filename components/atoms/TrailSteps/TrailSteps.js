import { StyledTrailSteps } from "../../organisms/GraphSection/GraphSection.styles";
import { ImageComponent } from "../ImageComponent/ImageComponent";

const propsToSVG = {
    src: "assets/trail-steps.svg",
    alt: 'trail-steps'
};

export const TrailSteps = () => {
    return (
        <StyledTrailSteps>
            <ImageComponent props={ propsToSVG }/>
        </StyledTrailSteps>
    );
};