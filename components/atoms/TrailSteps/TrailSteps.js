import { ImageComponent } from "../ImageComponent/ImageComponent";
import styled from "styled-components";

const propsToSVG = {
    src: "assets/trail-steps.svg",
    alt: 'animal trail'
};
const StyledTrailSteps = styled.div`
  position: absolute;
  width: 300px;
  z-index: -1;
  left: -10%;

  @media (max-width: 1000px) {
    left: 70%;
    width: 200px;
  }
`;
export const TrailSteps = () => {
    return (
        <StyledTrailSteps>
            <ImageComponent props={ propsToSVG }/>
        </StyledTrailSteps>
    );
};