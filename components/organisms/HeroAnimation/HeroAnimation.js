import styled from "styled-components";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import HeroAnim from "../../atoms/HeroAnimation/HeroAnimation";

const AnimationWrapper = styled.section`
  max-width: 1480px;
  margin: 0 auto 4em auto;
  padding-top: calc(350 / 1163 * 100%);
  position: relative;
  display: flex;
  justify-content: center;
  @media (max-width: 800px) {
    display: none;
  }
`;


export const HeroAnimation = () => {
    const [isDesktop, setIsDesktop] = useState();
    
    useEffect(() => {
        if (window.innerWidth > 800) {
            
            const FakedImport = dynamic(() => {
                return import("../../atoms/HeroAnimation/HeroAnimation").then(() => {
                    return () => null;
                });
            });
            
            setIsDesktop(true);
        }
    });
    
    return (
        <AnimationWrapper>
            { isDesktop && <HeroAnim/> }
        </AnimationWrapper>
    );
};