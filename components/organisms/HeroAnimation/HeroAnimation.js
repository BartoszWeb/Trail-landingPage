
import styled from "styled-components";

const AnimationWrapper = styled.section`
  max-width: 1480px;
  margin: 0 auto 4em auto;
  @media (max-width: 800px) {
    display: none;
  }
`;
import dynamic from 'next/dynamic'

const DynamicAnimation = dynamic(() => import('/components/atoms/HeroAnimation/HeroAnimation'))

export const HeroAnimation = () => {
    return (
        <AnimationWrapper>
            <DynamicAnimation/>
        </AnimationWrapper>
    );
};