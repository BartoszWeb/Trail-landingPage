import React from "react";
import LottieGraph from "react-lottie-wrapper";
import animationGraphData from "./GraphAnimationData";
import styled from "styled-components";


const WrapperAnimation = styled.div`
  width: 90%;
  margin: 0 auto;
`;


export const GraphAnimation = () => {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: animationGraphData,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
    };
    return (
        <>
            <WrapperAnimation>
                <LottieGraph tabIndex={ -1 } options={ defaultOptions }/>
            </WrapperAnimation>
        </>
    );
};