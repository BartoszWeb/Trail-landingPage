import styled from "styled-components";
import HeroAnim from "../../atoms/HeroAnimation/HeroAnimation";

const AnimationWrapper = styled.section`
  max-width: 1480px;
  margin: 0 auto 4em auto;
  @media (max-width: 800px) {
    display: none;
  }
`;


function HeroAnimation() {
    return (
        <AnimationWrapper>
            <HeroAnim/>
        </AnimationWrapper>
    );
}

export default HeroAnimation;