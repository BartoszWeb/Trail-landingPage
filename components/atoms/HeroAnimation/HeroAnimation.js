import React from "react";
import Lottie from "react-lottie-wrapper";
import animationData from "./HeroAnimationData";
import styled from "styled-components";

const WrapperAnimation = styled.div`
  width: auto;
  height: 450px;
  margin: 0 auto;
  @media (max-width: 1400px) {
    height: 400px;
  }
  @media (max-width: 1200px) {
    height: 350px;
  }
  @media (max-width: 1000px) {
    height: auto;
  }
`;

function HeroAnim() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationData,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
    };
    return (
        <>
            <WrapperAnimation>
                <Lottie tabIndex={ -1 } options={ defaultOptions }/>
            </WrapperAnimation>
        </>
    );
}

export default HeroAnim;