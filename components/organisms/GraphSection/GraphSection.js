import React, { useEffect, useRef, useState } from "react";
const graphTrailLogo = "assets/trail-graph.svg";
import { SectionSubtitle } from "../../atoms/Subtitles/SectionSubtitle";
import { ParagraphHtml } from "../../atoms/Paragraph/ParagraphHtml";
import { ButtonSignUp } from "../../atoms/ButtonSignUp/ButtonSignUp";
import { BoxContainer } from "../../atoms/Box/BoxContainer";
import { TrailSteps } from "../../atoms/TrailSteps/TrailSteps";
import { GraphSectionWrapper, GridTwoColumns, LeftColumn, RightColumn, FakeGraph } from "./GraphSection.styles";
import { LogoGraph } from "../../atoms/LogoGraph/LogoGraph";
import { gsap } from "gsap";
import { Frame } from "./GraphSection.styles";
import dynamic from "next/dynamic";

const DynamicGraphAnimation = dynamic(() => import("/components/atoms/GraphAnimation/GraphAnimation"));

export const GraphSection = () => {
    const [isTriggerGraphAnimation, setIsTriggerGraphAnimation] = useState(false);
    const graphAnimationSelector = useRef(null);
    
    useEffect(() => {
        const animation = graphAnimationSelector.current;
        gsap.fromTo(animation, { opacity: 0, }, {
            opacity: 1, stagger: 0.2, duration: 1, ease: "easeInOut", scrollTrigger: {
                trigger: animation,
                start: "top bottom",
                onEnter: () => setIsTriggerGraphAnimation(true)
            }
        });
    }, []);
    
    return (
        <>
            <GraphSectionWrapper>
                <SectionSubtitle textAlign={ "right" }>
                    Highlight the content which has the greatest impact on sales
                </SectionSubtitle>
                <GridTwoColumns>
                    <LeftColumn ref={ graphAnimationSelector } className="lottie-GraphAnimation">
                        <Frame width={ "90%" } logoSrc={ graphTrailLogo } padding={ "1.2em 0 0 0" }>
                            <LogoGraph/>
                            <BoxContainer margin={ "1em 0 0 0" } fontWeight={ "500" }>
                                Best selling pages
                            </BoxContainer>
                            { isTriggerGraphAnimation ? <DynamicGraphAnimation/> : <FakeGraph/> }
                        </Frame>
                    </LeftColumn>
                    <RightColumn>
                        <ParagraphHtml
                            textAlign={ "center" }
                            fontSize={ "1.6rem" }>
                            Look at pages which have the largest share of sales
                        </ParagraphHtml>
                        <ParagraphHtml
                            textAlign={ "center" }
                            fontSize={ "1.3rem" }
                            fontWeight={ "400" }
                            margin={ "1em 0 0 0" }>
                            The trail shows you which pages are the most often visited by buying users.
                        </ParagraphHtml>
                        <ParagraphHtml
                            textAlign={ "center" }
                            fontSize={ "1.6rem" }
                            fontWeight={ "600" }
                            margin={ "1em 0 0 0" }>
                            Make these pages more visible
                        </ParagraphHtml>
                        <ParagraphHtml
                            textAlign={ "center" }
                            fontSize={ "1.3rem" }
                            fontWeight={ "400" }
                            margin={ "1.3em 0 3.5em 0" }>
                            You can highlight these pages and boost your sales.
                        </ParagraphHtml>
                        <ButtonSignUp href="/signup">SIGN UP FREE</ButtonSignUp>
                        <TrailSteps/>
                    </RightColumn>
                </GridTwoColumns>
            </GraphSectionWrapper>
        </>
    );
};