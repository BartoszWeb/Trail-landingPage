import styled from "styled-components";
import { SectionSubtitle } from "../../atoms/Subtitles/SectionSubtitle";
import { Avatar } from "../../atoms/avatar/avatar";
import { Paragraph } from "../../atoms/paragraph/paragraph";


const TeamSectionWrapper = styled.section`
  max-width: 1280px;
  margin: 6em auto 2em auto;
`;

const AvatarsWrapper = styled.div`

  margin: 3em auto 0 auto;
  display: flex;
  flex-direction: row;
  justify-content: center;

  @media (max-width: 700px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SingleAvatarWrapper = styled.div`
  width: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  margin-bottom: 1.5em;
`;

const pathToBartoszPng = "assets/avatarBD.png";

export const TeamSection = () => {
    return (
        <TeamSectionWrapper id="our-team">
            <SectionSubtitle textAlign={ "right" }>Our Team</SectionSubtitle>
            <AvatarsWrapper>
                <SingleAvatarWrapper>
                    <Paragraph fontSize={ "18px" } textAlign={ "center" }>Bartosz</Paragraph>
                    <Avatar path={ pathToBartoszPng }/>
                </SingleAvatarWrapper>
            </AvatarsWrapper>
        </TeamSectionWrapper>
    );
};