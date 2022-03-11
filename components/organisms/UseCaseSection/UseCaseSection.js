import { SectionSubtitle } from "../../atoms/Subtitles/SectionSubtitle";
import { IframeSvgFake, UseCaseSectionWrapper } from "./UseCaseSections.styles";
import { WrapperSVG } from "./UseCaseSections.styles";
import { IframeSVG } from "./UseCaseSections.styles";
import { StyledButton } from "./UseCaseSections.styles";
import { useState } from "react";


export const UseCaseSection = () => {
    const [fetchYoutubeVideo, setFetchYoutubeVideo] = useState(false);
    const fetchYoutubeHandler = (e) => {
        setFetchYoutubeVideo(true);
    };
    return (
        <>
            <UseCaseSectionWrapper id="use-cases">
                <SectionSubtitle>Use cases</SectionSubtitle>
                { fetchYoutubeVideo
                    ?
                    <WrapperSVG>
                        <IframeSVG
                            src="https://www.youtube.com/embed/4UZrsTqkcW4?autoplay=1&mute=1"
                            allow="autoplay; encrypted-media"
                            frameborder="0"
                            allowfullscreen
                        />
                    </WrapperSVG>
                    :
                    <WrapperSVG>
                        <IframeSvgFake src="./assets/thumb.svg" onClick={ fetchYoutubeHandler }/>
                    </WrapperSVG>
                }
                <StyledButton href="/signup">SIGN UP FREE</StyledButton>
            </UseCaseSectionWrapper>
        </>
    );
};