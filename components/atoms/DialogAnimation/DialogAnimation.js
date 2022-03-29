import DialogGraph from "react-lottie-wrapper";
import dialogAnimation from "./DialogAnimationData";
import styled from "styled-components";

const WrapperAnimation = styled.div`
  margin: -2em auto 0 auto;
  width: 100%;
  position: absolute;
  top: 0;
  max-height: 100%;
`;


function DialogAnimation({ state }) {
    const defaultOptions = {
        loop: false,
        autoplay: false,
        animationData: dialogAnimation,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" },
    };
    
    return (
        <>
            <WrapperAnimation>
                <DialogGraph tabIndex={ -1 } options={ defaultOptions }
                             isStopped={ state.isStopped }
                             isPaused={ state.isPaused }/>
            </WrapperAnimation>
        </>
    );
}

export default DialogAnimation;