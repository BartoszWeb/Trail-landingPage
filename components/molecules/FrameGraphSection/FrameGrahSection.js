import { LogoGraph } from "../../atoms/LogoGraph/LogoGraph";
import { BoxContainer } from "../../atoms/Box/BoxContainer";
import { GraphAnimation } from "../../atoms/GraphAnimation/GraphAnimation";
import { ImageComponent } from "../../atoms/ImageComponent/ImageComponent";
import React, { useEffect, useState } from "react";
import { gsap } from "gsap";
import styled from "styled-components";
import { FrameGraph } from "../../atoms/Frame/FrameGraph";

const graphTrailLogo = "assets/trail-graph.svg";
const propsToGraph = {
    src: "assets/snapshotGraphAnimation.webp",
    alt: "graph-animation",
};

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid black;
  position: relative;
  width: 100%;
  margin: ${ ({ margin }) => margin };
  padding: ${ ({ padding }) => padding };


  @media (max-width: 300px) {
    padding: 10px;
    width: 90%;
    margin: 0 auto;
  }

  ::before {
    content: '';
    background-color: ${ ({ theme }) => theme.colors.secondaryColor };
    display: block;
    position: absolute;
    top: -33px;
    left: 10px;
    width: 100px;
    height: 60px;
  }


  @media (max-width: 1000px) {
    padding: 1em;
    width: 90%;
    margin: 0 auto;
  }
`;
export const FrameGraphSection = ({ graphAnimationSelector }) => {
    const [isTriggerGraphAnimation, setIsTriggerGraphAnimation] = useState(false);
    
    
    useEffect(() => {
        const animation = graphAnimationSelector.current;
        gsap.fromTo(animation, { opacity: 0, }, {
            opacity: 1, stagger: 0.2, duration: 1, ease: "easeInOut", scrollTrigger: {
                trigger: animation,
                start: "top bottom",
                onEnter: () => setIsTriggerGraphAnimation(true)
            }
        });
    }, []);
    
    
    return (
        <FrameGraph width={ "100%" } logoSrc={ graphTrailLogo } padding={ "1.2em 0 0 0" }>
            <LogoGraph/>
            <BoxContainer margin={ "1em 0 0 0" } fontWeight={ "500" }>Best selling pages</BoxContainer>
            { isTriggerGraphAnimation ? <GraphAnimation/> : <ImageComponent props={ propsToGraph }/> }
        </FrameGraph>
    );
};