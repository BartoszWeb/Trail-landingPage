import React, { useEffect, useRef, useState } from "react";
import { SectionSubtitle } from "../../atoms/Subtitles/SectionSubtitle";
import { Box } from "../../atoms/Box/Box";
import { ArrowNextStep } from "../../molecules/ArrowNextStep/ArrowNextStep";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";
import { DialogAnimation } from "../../atoms/DialogAnimation/DialogAnimation";
import { Frame } from "../../atoms/Frame/Frame";
import { DialogSectionWrapper } from "./DialogAnimationSection.styles";
import { GridTwoColumns } from "./DialogAnimationSection.styles";
import { LeftColumn } from "./DialogAnimationSection.styles";
import { RightColumn } from "./DialogAnimationSection.styles";
import { gsap } from "gsap";

const path = "assets/trail-graph.svg";

export const DialogAnimationSection = () => {
    const [isTriggerDialogAnimation, setIsTriggerDialogAnimation] = useState(false);
    const dialogAnimationSelector = useRef(null);
    
    useEffect(() => {
        const animation = dialogAnimationSelector.current;
        gsap.fromTo(animation, { opacity: 0, }, {
            opacity: 1, stagger: 0.2, duration: 1, ease: "easeInOut", scrollTrigger: {
                trigger: animation,
                start: "top bottom",
                onEnter: () => setIsTriggerDialogAnimation(true)
            }
        });
    }, []);
    
    return (
        <>
            <DialogSectionWrapper id="how-it-works">
                <SectionSubtitle>Discover the customers` shopping trail</SectionSubtitle>
                <GridTwoColumns ref={ dialogAnimationSelector } className="lottie-dialogAnimation">
                    <LeftColumn>
                        <Frame width={ "90%" } logoSrc={ path } margin={ "0 auto 2em auto" }
                               padding={ "2em" }>
                            <Box><span><b>User visited:</b> “main page"</span></Box>
                            <ArrowNextStep/>
                            <Box><span><b>User read article:</b> "How works trail?”</span></Box>
                            <ArrowNextStep/>
                            <Box><span><b>User read article:</b> “How can I boost sales with trail?”</span></Box>
                            <ArrowNextStep/>
                            <Box><span><b>User visited page:</b> “Use cases”</span></Box>
                            <ArrowNextStep/>
                            <Box><span><b>User visited page:</b> “Pricing”</span></Box>
                            <ArrowNextStep/>
                            <Box><span><b>User singed up</b></span></Box>
                        </Frame>
                        <ButtonSignUp href="/signup">SIGN UP FREE</ButtonSignUp>
                    </LeftColumn>
                    <RightColumn>
                        { isTriggerDialogAnimation && <DialogAnimation/> }
                    </RightColumn>
                </GridTwoColumns>
            </DialogSectionWrapper>
        </>
    );
};