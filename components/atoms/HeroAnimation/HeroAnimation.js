import React from "react";
import Lottie from "react-lottie-wrapper";
import animationData from "./HeroAnimationData";
import styled from "styled-components";

const WrapperAnimation = styled.div`
  width: auto;
  margin: 0 auto;

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