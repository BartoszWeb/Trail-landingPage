import { WrapperSVG } from "../atoms/LaptopCanvas/LaptopCanvas.styles";
import { VideoThumbnail } from "./LaptopCanvasThumbnail.styles";

export const LaptopCanvasThumbnail = ({ fetchYoutubeHandler }) => {
    return (
        <WrapperSVG>
            <VideoThumbnail src="./assets/thumbnail.svg" onClick={ fetchYoutubeHandler }/>
        </WrapperSVG>
    );
};