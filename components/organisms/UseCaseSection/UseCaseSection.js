import { SectionSubtitle } from "../../atoms/Subtitles/SectionSubtitle";
import { UseCaseSectionWrapper } from "./UseCaseSections.styles";
import { StyledButton } from "./UseCaseSections.styles";
import { useState } from "react";
import { LaptopCanvasThumbnail } from "../../LaptopCanvasThumbnail/LaptopCanvasThumbnail";
import { LaptopCanvas } from "../../atoms/LaptopCanvas/LaptopCanvas";

export const UseCaseSection = () => {
    const [fetchYoutubeVideo, setFetchYoutubeVideo] = useState(false);
    
    const fetchYoutubeHandler = () => {
        setFetchYoutubeVideo(true);
    };
    
    return (
        <>
            <UseCaseSectionWrapper id="use-cases">
                <SectionSubtitle margin={ "0 1.5em 2em 1.5em" }>Use cases</SectionSubtitle>
                {
                    fetchYoutubeVideo ? <LaptopCanvas/> :
                        <LaptopCanvasThumbnail fetchYoutubeVideo={ fetchYoutubeVideo }
                                               fetchYoutubeHandler={ fetchYoutubeHandler }/>
                }
                <StyledButton href="/signup">SIGN UP FREE</StyledButton>
            </UseCaseSectionWrapper>
        </>
    );
};