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


function DialogAnimation() {
    const defaultOptions = {
        loop: false,
        autoplay: true,
        animationData: dialogAnimation,
        rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
    };
    
    return (
        <>
            <WrapperAnimation>
                <DialogGraph tabIndex={ -1 } options={ defaultOptions }/>
            </WrapperAnimation>
        </>
    );
}

export default DialogAnimation;