import styled from "styled-components";
import dynamic from "next/dynamic";

const AnimationWrapper = styled.section`
  max-width: 1480px;
  margin: 0 auto 4em auto;
  @media (max-width: 800px) {
    display: none;
  }
`;

const DynamicHeroAnimation = dynamic(() => import("../../atoms/HeroAnimation/HeroAnimation"));

export const HeroAnimation = () => {
    return (
        <AnimationWrapper>
            <DynamicHeroAnimation/>
        </AnimationWrapper>
    );
};