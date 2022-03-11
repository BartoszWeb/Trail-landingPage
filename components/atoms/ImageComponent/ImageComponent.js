import Image from "next/image";
import { Container } from "./ImageComponent.styles";

export const ImageComponent = ({ props }) => {
    const { preLoading = false, src, alt } = props;
    
    if (preLoading) {
        return (
            <Container>
                <Image priority={ preLoading }
                       loading={ "eager" }
                       src={ `/` + src }
                       layout="fill"
                       className={ "image" }
                       alt={ alt }
                />
            </Container>
        );
    }
    
    return (
        <Container>
            <Image src={ `/` + src }
                   layout="fill"
                   className={ "image" }
                   alt={ alt }
            />
        </Container>
    );
};