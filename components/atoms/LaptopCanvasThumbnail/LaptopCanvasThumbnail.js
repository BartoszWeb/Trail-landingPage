import { WrapperSVG } from "../LaptopCanvas/LaptopCanvas.styles";
import { StyledPlayIcon, VideoThumbnail } from "./LaptopCanvasThumbnail.styles";
import { useEffect, useRef } from "react";
import { ImageComponent } from "../ImageComponent/ImageComponent";
import styled from "styled-components";

const propsPlay = {
    src: "assets/play.svg",
    alt: "Play video",
};


export const LaptopCanvasThumbnail = ({ fetchYoutubeHandler, fetchYoutubeVideo }) => {
    const playIconSelector = useRef(null);
    
    useEffect(() => {
        const selector = playIconSelector.current;
        if (!selector) return;
        
        if (!fetchYoutubeVideo) {
            selector.addEventListener("keydown", loadVideoHandler);
        }
        
        function loadVideoHandler(e) {
            if (e.key === "Enter" || "Space") {
                fetchYoutubeHandler();
            }
        }
        
        return () => selector.removeEventListener("keydown", loadVideoHandler);
        
    }, []);
    
    
    return (
        <WrapperSVG>
            <VideoThumbnail alt="Thumbnail of video with Trail`s use case"
                            src="./assets/thumbnail.svg"/>
            <StyledPlayIcon ref={ playIconSelector } onClick={ fetchYoutubeHandler }>
                <ImageComponent props={ propsPlay }> </ImageComponent>
            </StyledPlayIcon>
        </WrapperSVG>
    );
};