import { LogoReversColors } from "../../atoms/Logo/LogoReverseColors";
import { Paragraph } from "../../atoms/Paragraph/Paragraph";
import { FooterItem } from "../../atoms/FooterItem/FooterItem";
import Link from "next/link";
import {
    Column,
    ContentWrapper,
    FooterWrapper, Line,
    SingleItem,
    StyledLogo, TermsUl,
    TermsWrapper,
    WrapperParagraph
} from "./Footer.styles";

export const Footer = () => {
    return (
        <FooterWrapper id="contact">
            <ContentWrapper>
                <SingleItem>
                    <Link passHref href="/">
                        <StyledLogo>
                            <LogoReversColors/>
                        </StyledLogo>
                    </Link>
                    <WrapperParagraph>
                        <Paragraph margin={ "-0.1em 0 0 0.7em" } color={ "white" } fontSize={ "1.2rem" } textAlign={ "left" }>Get
                            to know your customers better.</Paragraph>
                    </WrapperParagraph>
                </SingleItem>
                <SingleItem>
                    <Paragraph margin={ "1em 0 0 0" } color={ "white" } fontSize={ "1.4rem" }
                               textAlign={ "center" }>Contact:</Paragraph>
                    <Column>
                        <FooterItem href={ "/" } title={ "support@thetrail.com" }/>
                    </Column>
                </SingleItem>
                <SingleItem>
                    <Paragraph margin={ "1em 0 0 0" } color={ "white" } fontSize={ "1.4rem" }
                               textAlign={ "center" }>Product:</Paragraph>
                    
                    <Column>
                        <FooterItem href={ "/" } title={ "Pricing" }/>
                        <FooterItem href={ "/" } title={ "Customer reviews" }/>
                    </Column>
                </SingleItem>
                <SingleItem>
                    <Paragraph margin={ "1em 0 0 0" } color={ "white" } fontSize={ "1.4rem" }
                               textAlign={ "center" }>Resources:</Paragraph>
                    <Column>
                        <FooterItem href={ "/" } title={ "Blog" }/>
                        <FooterItem href={ "/" } title={ "Case studies" }/>
                        <FooterItem href={ "/" } title={ "Videos" }/>
                    </Column>
                </SingleItem>
            </ContentWrapper>
            <TermsWrapper>
                <Line/>
                <TermsUl>
                    <FooterItem padding={ "0 1.5em" } fontSize={ "1.2rem" } mediaFontSize={ "1rem" } href={ "/" }
                                title={ "Cookies" }/>
                    <FooterItem padding={ "0 1.5em" } fontSize={ "1.2rem" } mediaFontSize={ "1rem" } href={ "/" }
                                title={ "Privacy" }/>
                    <FooterItem padding={ "0 1.5em" } fontSize={ "1.2rem" } mediaFontSize={ "1rem" } href={ "/" }
                                title={ "Terms" }/>
                    <FooterItem padding={ "0 1.5em" } fontSize={ "1.2rem" } mediaFontSize={ "1rem" } href={ "/" }
                                title={ "@2021 Technologies, Inc" }/>
                </TermsUl>
            </TermsWrapper>
        </FooterWrapper>
    );
};