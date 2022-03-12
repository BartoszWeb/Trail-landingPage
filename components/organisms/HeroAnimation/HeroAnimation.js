import styled from "styled-components";
import HeroAnimation from "../../atoms/HeroAnimation/HeroAnimation";
const AnimationWrapper = styled.section`
  max-width: 1480px;
  margin: 0 auto 4em auto;
  @media (max-width: 800px) {
    display: none;
  }
`;



function HeroAnimationSection() {
    return (
        <AnimationWrapper>
            <HeroAnimation/>
        </AnimationWrapper>
    );
}

export default HeroAnimationSection;