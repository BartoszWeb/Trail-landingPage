import { ImageComponent } from "../ImageComponent/ImageComponent";
const pathToLogo = "assets/logo-trail-reversColors.svg"

const propsLogo = {
    src: pathToLogo,
    alt: 'logo'
};


export const LogoReversColors = () => {
    return (
        <ImageComponent props={ propsLogo }/>
    )
};