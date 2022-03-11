import { SectionSubtitle } from "../../atoms/Subtitles/SectionSubtitle";
import { UseCaseSectionWrapper } from "./UseCaseSections.styles";
import { WrapperSVG } from "./UseCaseSections.styles";
import { IframeSVG } from "./UseCaseSections.styles";
import { StyledButton } from "./UseCaseSections.styles";

export const UseCaseSection = () => {
    return (
        <>
            <UseCaseSectionWrapper id="use-cases">
                <SectionSubtitle>Use cases</SectionSubtitle>
                <WrapperSVG>
                    <IframeSVG
                        src="//www.youtube.com/embed/4UZrsTqkcW4"
                        frameborder="0"
                        allowfullscreen
                    />
                </WrapperSVG>
                <StyledButton href="/signup">SIGN UP FREE</StyledButton>
            </UseCaseSectionWrapper>
        </>
    );
};