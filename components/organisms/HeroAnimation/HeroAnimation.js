import styled from "styled-components";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

const AnimationWrapper = styled.section`
  max-width: 1480px;
  margin: 0 auto 4em auto;
  height: 450px;
  @media (max-width: 800px) {
    display: none;
  }
  @media (max-width: 1400px) {
    height: 400px;
  }
  @media (max-width: 1200px) {
    height: 350px;
  }
`;

const DynamicHeroAnimation = dynamic(() => import("../../atoms/HeroAnimation/HeroAnimation"));

export const HeroAnimation = () => {
    
    const [isDesktop, setIsDesktop] = useState();
    
    useEffect(() => {
        if (window.innerWidth > 800) {
            setIsDesktop(true);
        }
    });
    
    return (
        <AnimationWrapper>
            { isDesktop && <DynamicHeroAnimation/> }
        </AnimationWrapper>
    );
};