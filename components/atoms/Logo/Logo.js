import { ImageComponent } from "../ImageComponent/ImageComponent";

const propsLogo = {
    src: 'assets/logo-trail.svg',
    alt: 'logo',
    preLoading: true
};

export const Logo = () => {
    return (
        <ImageComponent props={ propsLogo }> </ImageComponent>
    );
};