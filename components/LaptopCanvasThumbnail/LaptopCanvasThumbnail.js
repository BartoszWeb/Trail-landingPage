import { WrapperSVG } from "../atoms/LaptopCanvas/LaptopCanvas.styles";
import { VideoThumbnail } from "./LaptopCanvasThumbnail.styles";

export const LaptopCanvasThumbnail = ({ fetchYoutubeHandler }) => {
    return (
        <WrapperSVG>
            <VideoThumbnail alt="Thumbnail of video with Trail`s use case" src="./assets/thumbnail.svg" onClick={ fetchYoutubeHandler }/>
        </WrapperSVG>
    );
};