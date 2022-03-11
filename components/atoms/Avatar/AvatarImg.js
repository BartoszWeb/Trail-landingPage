import styled from "styled-components";
import { ImageComponent } from "../ImageComponent/ImageComponent";

const AvatarWrapper = styled.div`
  margin-top: 1.2em;
`;


export const AvatarImg = ({ path }) => {
    const propsAvatar = {
        src: path,
        alt: "avatar",
    };
    
    return (
        <AvatarWrapper>
            <ImageComponent props={ propsAvatar }> </ImageComponent>
        </AvatarWrapper>
    );
};